<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm3 md2>
        <v-list two-line subheader>
          <v-subheader inset>Class</v-subheader>

          <v-divider inset></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="getClassData(item.title)"
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs12 sm3 md10 ma-3 text-xs-center>
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="!selected"
            class="title grey--text text--lighten-1 font-weight-light"
            style="align-self: center;"
          >{{msg}}</div>
          <v-card v-if="selected">
            <v-toolbar flat color="white">
              <v-toolbar-title>{{selectedClass.name}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="960px">
                <v-btn slot="activator" dark class="mb-2">Upload New Result</v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Upload Excel File - {{selectedClass.name}}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm12 md12>
                          <div
                            id="drop"
                            @drop="handleDrop"
                            @dragover="handleDragover"
                            @dragenter="handleDragover"
                          >Dropdf Here</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="selectedClassHeaders"
              :items="selectedClassData"
              item-key="name"
            >
              <template slot="items" slot-scope="props">
                <tr>
                  <td>{{ props.item.rollno }}</td>
                  <td>{{ props.item.name }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-scroll-y-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from "../firebase/firestore";

/**
 **  Disclaimer: XLSX Code comes from http://oss.sheetjs.com/js-xlsx/
 **/

/** DATA data **/
var data = {
  sheetData: [],
  headers: [
    { text: "Roll No", value: "", sortable: true },
    { text: "Name", value: "", sortable: true },
    { text: "01", value: "", sortable: false },
    { text: "02", value: "", sortable: false },
    { text: "03", value: "", sortable: false },
    { text: "04", value: "", sortable: false },
    { text: "05", value: "", sortable: false },
    { text: "06", value: "", sortable: false },
    { text: "07", value: "", sortable: false }
  ]
};

// interBus var
var tempheader = [];
var tempdata = [];

/** HELPERS **/
function get_header_row(sheet) {
  var headers = [],
    range = XLSX.utils.decode_range(sheet["!ref"]);
  var C,
    R = range.s.r; /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    var cell =
      sheet[
        XLSX.utils.encode_cell({ c: C, r: R })
      ]; /* find the cell in the first row */
    var hdr = "UNKNOWN " + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    headers.push(hdr);
  }
  return headers;
}
function fixdata(data) {
  var o = "",
    l = 0,
    w = 10240;
  for (; l < data.byteLength / w; ++l)
    o += String.fromCharCode.apply(
      null,
      new Uint8Array(data.slice(l * w, l * w + w))
    );
  o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
  return o;
}
function workbook_to_json(workbook) {
  var result = {};
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    if (roa.length > 0) {
      result[sheetName] = roa;
    }
  });
  return result;
}
/** PARSING and DRAGDROP **/
function handleDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log("DROPPED");
  var files = e.dataTransfer.files,
    i,
    f;
  for (i = 0, f = files[i]; i != files.length; ++i) {
    var reader = new FileReader(),
      name = f.name;
    reader.onload = function(e) {
      var results, data, fixedData, workbook, firstSheetName, worksheet;

      data = e.target.result;
      fixedData = fixdata(data);
      workbook = XLSX.read(btoa(fixedData), { type: "base64" });
      firstSheetName = workbook.SheetNames[0];
      worksheet = workbook.Sheets[firstSheetName];

      data.headers = get_header_row(worksheet);
      results = XLSX.utils.sheet_to_json(worksheet);
      data.sheetData = results;
      // bus
      tempheader = data.headers;
      tempdata = data.sheetData;

      alert("Uploaded");
    };
    reader.readAsArrayBuffer(f);
  }
}
function handleDragover(e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}
function interBus() {
  return {
    headers: tempheader,
    data: tempdata
  };
}

export default {
  data() {
    return {
      headers: [],
      sheetData: [],
      msg: "Select a class",
      selected: false,
      selectedClass: {},
      selectedClassData: [],
      selectedClassHeaders: [],
      dialog: false,
      items: [
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "1CST",
          subtitle: "First Year (CST)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "2CS",
          subtitle: "Second Year (CS)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "2CT",
          subtitle: "Second Year (CT)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "3CS",
          subtitle: "Third Year (CS)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "3CT",
          subtitle: "Third Year (CT)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "4CS",
          subtitle: "Fourth Year (CS)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "4CT",
          subtitle: "Fourth Year (CT)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "5CS",
          subtitle: "Fifth Year (CS)"
        },
        {
          icon: "assignment",
          iconClass: "grey lighten-1 white--text",
          title: "5CT",
          subtitle: " Fifth Year (CT)"
        }
      ]
    };
  },
  methods: {
    handleDragover: handleDragover,
    handleDrop: handleDrop,
    interBus: interBus,
    close() {
      this.dialog = false;
    },
    save() {
      this.headers = [];
      this.sheetData = [];
      // run data bus
      var interBusData = this.interBus();

      var className = this.selectedClass.name;
      this.headers = interBusData.headers;
      this.sheetData = interBusData.data;

      // collection reference
      var collectionRef = firestore.collection(className);
      // Get a new write batch
      var batch = firestore.batch();
      var docRef, docName, row;

      for (let index = 0; index < this.sheetData.length; index++) {
        const element = this.sheetData[index];
        if (index <= 8) docName = "row-00" + (index + 1);
        else if (index <= 98) docName = "row-0" + (index + 1);
        else docName = "row-" + (index + 1);
        docRef = collectionRef.doc(docName);
        batch.set(docRef, element);
      }

      // Commit the batch
      return batch.commit().then(this.close());

      // setTimeout(() => {
      //   this.dialog = false;
      // }, 300);
    },
    getClassData: function(collName) {
      this.selected = false;
      this.selectedClass = {};
      this.selectedClassData = [];
      this.msg = "Querying data...";
      this.selectedClass = {
        name: collName
      };
      // collection reference
      var colRel = firestore.collection(collName);
      // Get all documents in a collection
      colRel
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.selectedClassData.push(doc.data());
          });

          this.selected = true;
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });

      //get headers

      // if (collName == "1CST") {
      //   firestore
      //     .collection("subject")
      //     .doc("1CST")
      //     .get()
      //     .then(doc => {
      //       var temp = doc.data();
      //       console.log(this.headers);
      //     });
      // } else {
      //   firestore
      //     .collection("subject")
      //     .doc("other")
      //     .get()
      //     .then(doc => {
      //       var temp = doc.data();
      //       // this.selectedClassHeaders = temp.subject;
      //       console.log(this.headers);
      //     });
      // }
    }
  }
};
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosansmyanmar.css);
.mmunicode {
  font-family: "Noto Sans Myanmar", sans-serif !important;
}
#drop {
  border: 2px dashed #bbb;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  font: 20pt bold, "Vollkorn";
  color: #bbb;
}
</style>

