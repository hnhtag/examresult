<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>exam</span>
        <span class="font-weight-light">result</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
