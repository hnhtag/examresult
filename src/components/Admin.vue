<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 md3>
          <v-text-field
              name="name"
              label="label"
              id="id"
              v-model="aaa"
          ></v-text-field>
          <v-btn round color="primary" dark @click="addData">text</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        aaa:''
    };
  },
  methods: {
      addData:function(){

      }
  }
};
</script>

<style>
</style>

