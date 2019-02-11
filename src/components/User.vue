<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <form>
          <v-text-field v-model="name" label="Name" data-vv-name="name" required></v-text-field>
          <v-text-field v-model="RollNo" label="Roll-No" data-vv-name="Roll-No" required></v-text-field>
          <v-text-field v-model="Class" label="Class" data-vv-name="Class" required></v-text-field>

          <v-btn @click="select">search your result</v-btn>
        </form>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <v-layout>
      <v-flex xs12 sm4 offset-md0>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FIRST YEAR</h3>
            </div>
          </v-card-title>

          <v-card-actions>
             <router-link to="/result/foo">View</router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">SECOND YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">SECOND YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <v-layout>
      <v-flex xs12 sm4 offset-md0>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">THIRD YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">THIRD YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FOURTH YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <br>

    <v-layout>
      <v-flex xs12 sm4 offset-md0>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FOURTH YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FIFTH YEAR(CS)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">FIFTH YEAR(CT)</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="BLACK">VIEW</v-btn>
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
      aaa: ""
    };
  },
  mounted() {},
  methods: {
    showData: function(e) {
      alert(e);
    },
    select: function() {}
  }
};
</script>

<style>
</style>

