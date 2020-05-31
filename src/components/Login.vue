<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card-theme mt-12" centered align-center>
        <v-card-text>
          <v-container>
            <form v-if="!showSignUp">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    class="input-user"
                    name="email"
                    label="Mail"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    class="input-user"
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout class="justify-end">
                <v-btn class="brown--text text--lighten-1 mb-5" @click="logIn"
                  >Login</v-btn
                ></v-layout
              >
              <v-layout>
                You don't have an account?
                <v-btn
                  class="brown--text text--lighten-1ml-5 ml-4 my-n1"
                  small
                  @click="switchToSignUp(true)"
                  >Sign Up
                </v-btn>
              </v-layout>
            </form>
            <form v-if="showSignUp">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    class="input-user"
                    name="email"
                    label="Mail"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    class="input-user"
                    name="password"
                    label="Create password"
                    id="password"
                    v-model="password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout class="justify-end">
                <v-btn class="brown--text text--lighten-1 mb-5" @click="signUp"
                  >Sign Up</v-btn
                ></v-layout
              >
              <v-layout>
                Already have an account?
                <v-btn
                  small
                  class="brown--text text--lighten-1ml-5 ml-4 my-n1"
                  @click="switchToSignUp(false)"
                  >Login
                </v-btn>
              </v-layout>
            </form>
          </v-container></v-card-text
        ></v-card
      ></v-flex
    ></v-layout
  >
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      show_sign_up: false,
      email: "",
      password: "",
    };
  },
  computed: {
    showSignUp() {
      return this.show_sign_up;
    },
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.commit("MODIFY_ACCESS", true);
        })
        .catch((err) => {
          alert("Oops." + err.message);
        });
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.commit("MODIFY_ACCESS", true);
        })
        .catch((err) => {
          alert("Oops." + err.message);
        });
    },
    switchToSignUp(value) {
      this.show_sign_up = value;
    },
  },
};
</script>

<style></style>
