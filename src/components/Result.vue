<template>
  <v-container>
    <v-data-table :headers="headers" :items="resultData" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.rollno }}</td>
        <td>{{ props.item.name }}</td>
        <td class="">{{ props.item.one }}</td>
        <td class="">{{ props.item.two }}</td>
        <td class="">{{ props.item.three }}</td>
        <td class="">{{ props.item.four }}</td>
        <td class="">{{ props.item.five }}</td>
        <td class="">{{ props.item.six }}</td>
        <td class="">{{ props.item.seven }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import firestore from "../firebase/firestore.js";
export default {
  data() {
    return {
      param: "",
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
  mounted() {
    this.param = this.$route.params.id;
    firestore
      .collection(this.param).orderBy(".key")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
        //   console.log(doc.id, "=>", doc.data());
        this.resultData.push(doc.data())
        });
      })
      .catch();
  }
};
</script>
<style>
</style>


