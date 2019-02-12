<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex md12 text-md-center mt-5>
        <img src="@/assets/ucsmub.png" alt="UCS Maubin" width="90">
      </v-flex>
      <v-flex md12 text-md-center>
        <h2>University of Computer Studies (Maubin)</h2>
        <h3>2018-2019 Academic Year</h3>
        <h3>Online Exam Result</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-4>
      <v-flex offset-md4 md2>
        <v-select v-model="roll" :items="items" solo field label="Choose Your Roll"></v-select>
      </v-flex>
      <v-flex md2>
        <v-text-field label="Number" v-model="number" solo v-on:keyup.enter="search"></v-text-field>
      </v-flex>
      <v-flex offset-md5 md2 class="text-md-center">
        <v-btn fab dark medium color="cyan" @click="search" v-if="!isSearch">
          <v-icon dark>search</v-icon>
        </v-btn>
        <v-btn fab dark medium color="error" @click="reset" v-if="isSearch">
          <v-icon dark>delete</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <!-- result -->
    <v-layout row wrap v-if="isSearch" text-md-center mb-5>
      <v-flex offset-md4 md4>
        <v-alert type="success" :value="true">Congratulation! You passed.</v-alert>
        <v-card>
          <v-card-text text-md-left>
            <h3>Name:{{result.name}}</h3>
            <h4>Roll No: {{result.rollno}}</h4>
            <br>
            <hr>
            <br>
            <table width="100%">
              <tr>
                <td>One:</td>
                <td class="grade">{{result.one}}</td>
              </tr>
              <tr>
                <td>Two:</td>
                <td class="grade">{{result.two}}</td>
              </tr>
              <tr>
                <td>Three:</td>
                <td class="grade">{{result.three}}</td>
              </tr>
              <tr>
                <td>Four:</td>
                <td class="grade">{{result.four }}</td>
              </tr>
              <tr>
                <td>Five:</td>
                <td class="grade">{{result.five}}</td>
              </tr>
              <tr>
                <td>Six:</td>
                <td class="grade">{{result.six}}</td>
              </tr>
              <tr>
                <td>Seven:</td>
                <td class="grade">{{result.seven}}</td>
              </tr>
            </table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- cate -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <v-layout row wrap v-if="!isSearch" mb-5>
      <v-flex md8 offset-md2>
        <v-container grid-list-md>
          <v-layout row wrap>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">FIRST YEAR</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/1CST" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">SECOND YEAR(CS)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/2CS" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">SECOND YEAR(CT)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/2CT" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">THIRD YEAR(CS)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/3CS" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">THIRD YEAR(CT)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/3CT" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">FOURTH YEAR(CS)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/4CS" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">FOURTH YEAR(CT)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/4CT" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">FIFTH YEAR(CS)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/5CS" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
            <v-flex md4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">FIFTH YEAR(CT)</h3>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <router-link to="/result/5CT" tag="v-btn">
                    <v-btn color="cyan" flat value="feed">
                      <span>View</span>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!--  -->
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from "../firebase/firestore.js";
export default {
  data() {
    return {
      items: ["1CST", "2CS", "2CT", "3CS", "3CT", "4CS", "4CT", "5CS", "5CT"],
      roll: "",
      number: "",
      isSearch: false,
      result: {}
    };
  },
  mounted() {},
  methods: {
    search: function() {
      if (this.roll != "" && this.number != "") {
        var rollno = this.roll + "-" + this.number;
        firestore
          .collection(this.roll)
          .where("rollno", "==", rollno)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.data());
              this.result = doc.data();
            });
            this.isSearch = true;
          });
      }
    },
    reset: function() {
      this.isSearch = false;
      this.result = {};
      this.roll = "";
      this.number = "";
    }
  }
};
</script>

<style>
h1 {
  font-weight: 400;
}
h2 {
  font-weight: 400;
}
h3 {
  font-weight: 400;
}

.grade {
  width: 40%;
  text-align: left;
}
</style>

