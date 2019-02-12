<template>
  <v-app>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <v-container fluid>
        <v-layout>
          <v-flex md12 text-md-center>
           Powered by <img src="@/assets/itclub-iconlogo.png" alt="IT Club - UCS Maubin" width="30"> IT Club - UCS Maubin
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
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
