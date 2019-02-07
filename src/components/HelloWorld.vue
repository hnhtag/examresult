<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <div class="row">
          <div class="col-md-12">
            <div
              id="drop"
              @drop="handleDrop"
              @dragover="handleDragover"
              @dragenter="handleDragover"
            >Drop Here</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-striped table-hover table-condensed table-responsive">
              <thead>
                <tr>
                  <th v-for="item in headers" v-bind:key="item">{{item}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in sheetData" v-bind:key="item">
                  <td v-for="key in item" v-bind:key="key">
                    <label>{{key}}</label>
                    <p>{{item.key}}</p>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import XLSX from "xlsx";

export default {
  data: () => ({
    sheetData: [{ name: "test" }],
    headers: ["Test header"]
  }),
  methods: {
    /** Disclaimer: XLSX Code comes from http://oss.sheetjs.com/js-xlsx/ **/
    /** HELPERS **/
    get_header_row: function(sheet) {
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
    },
    fixdata: function(data) {
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
    },
    workbook_to_json: function(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    /** PARSING and DRAGDROP **/
    handleDrop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      // console.log("DROPPED");
      var files = e.dataTransfer.files,
        i,
        f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
          name = f.name;
        reader.onload = function(e) {
          var results,
            data = e.target.result,
            fixedData = this.fixdata(data),
            workbook = XLSX.read(btoa(fixedData), { type: "base64" }),
            firstSheetName = workbook.SheetNames[0],
            worksheet = workbook.Sheets[firstSheetName];
          this.headers = this.get_header_row(worksheet);
          results = XLSX.utils.sheet_to_json(worksheet);
          this.sheetData = results;
        };
        reader.readAsArrayBuffer(f);
      }
    },
    handleDragover: function(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    }
  }
};
</script>

<style>
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
