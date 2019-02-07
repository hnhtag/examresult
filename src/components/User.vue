<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 md3>{{aaa}}</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      aaa: ""
    };
  },
  mounted() {
  },
  methods: {
    showData: function(e) {
      alert(e)
    }
  }
};
</script>

<style>
</style>

