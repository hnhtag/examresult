<template>
  <v-container>
    <v-btn flat medium round color="primary" @click="backtoHome">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <span>{{param}} Result</span>
    <v-data-table
      :headers="headers"
      :items="resultData"
      :pagination.sync="pagination"
      :rows-per-page-items="rowsPerPageItems"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.rollno }}</td>
        <td>{{ props.item.name }}</td>
        <td class>{{ props.item.one }}</td>
        <td class>{{ props.item.two }}</td>
        <td class>{{ props.item.three }}</td>
        <td class>{{ props.item.four }}</td>
        <td class>{{ props.item.five }}</td>
        <td class>{{ props.item.six }}</td>
        <td class>{{ props.item.seven }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import firestore from "../firebase/firestore.js";
import router from "../router";
export default {
  data() {
    return {
      param: "",
      rowsPerPageItems: [10, 30, 50],
      pagination: {
        rowsPerPage: 50
      },
      headers: [
        {
          text: "Roll No",
          align: "left",
          value: "rollname"
        },
        { text: "Name", value: "name" },
        { text: "1", value: "one" },
        { text: "2", value: "two" },
        { text: "3", value: "three" },
        { text: "4", value: "four" },
        { text: "5", value: "five" },
        { text: "6", value: "six" },
        { text: "7", value: "seven" }
      ],
      resultData: [],
      aa: []
    };
  },
  methods: {
    backtoHome() {
      router.push({ name: "Home" });
    }
  },
  mounted() {
    this.param = this.$route.params.id;
    firestore
      .collection(this.param)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          //   console.log(doc.id, "=>", doc.data());
          this.resultData.push(doc.data());
        });
      })
      .catch();

    if (this.param == "1CST") {
      firestore
        .collection("subject")
        .doc("1CST")
        .get()
        .then(doc => {
          var temp = doc.data();
          console.log(this.headers);
        });
    } else {
      firestore
        .collection("subject")
        .doc("other")
        .get()
        .then(doc => {
          var temp = doc.data();
          tempArr = [];
          // this.selectedClassHeaders = temp.subject;
          temp.forEach(te => {
            var temp1 = { text: te, value: te };
            tempArr.push(temp1);
          });
          this.headers = tempArr;
          console.log(this.headers);
        });
    }
  }
};
</script>
<style>
</style>


