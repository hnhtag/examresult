<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <form>
          <v-text-field v-model="RollNo" label="Roll-No" required></v-text-field>

          <v-btn @click="findresult">search your result</v-btn>
        </form>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <v-layout>
      <v-flex xs12 sm4 offset-md0>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FIRST YEAR</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/1CST">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">SECOND YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/2CS">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">SECOND YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/2CT">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <v-layout>
      <v-flex xs12 sm4 offset-md0>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">THIRD YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/3CS">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">THIRD YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/3CT">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FOURTH YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/4CS">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <br>

    <v-layout>
      <v-flex xs12 sm4 offset-md0>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FOURTH YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/4CT">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FIFTH YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/5CS">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FIFTH YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <router-link to="/result/5CT">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      RollNo: ""
    };
  },
  mounted() {},
  methods: {
    findresult:function(){

    }
  }
};
</script>

<style>
</style>

