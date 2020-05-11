<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card-theme mt-5" centered align-center>
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

              <v-btn class="brown--text text--lighten-1" @click="logIn"
                >Login</v-btn
              >
              <p>
                You don't have an account?
                <v-btn @click="switchToSignUp(true)">Sign Up </v-btn>
              </p>
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

              <v-btn class="brown--text text--lighten-1" @click="signUp"
                >Sign Up</v-btn
              >
              <p>
                Already have an account?
                <v-btn @click="switchToSignUp(false)">Login </v-btn>
              </p>
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
