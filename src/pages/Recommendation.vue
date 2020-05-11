<template
  ><div>
   <div v-if="!authenticated">
      <login/>
            </div>

    <v-container v-if="authenticated">
      <v-layout row wrap fill-height="auto" style="height: 300px;">
        <books-to-be-rated
      /></v-layout>
      <!-- </v-layout> -->
      <!-- <v-layout> -->
      <v-layout row wrap> </v-layout
    ></v-container>
  </div>
</template>

<script>
import BooksToBeRated from "../components/BooksToBeRated";
import Login from "../components/Login";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    BooksToBeRated,
    Login,
  },
  computed: {
    authenticated() {
      return this.$store.getters.getAuthenticationStatus;
    },
  },
  mounted() {
    this.$store.commit("SET_BOOK", null);
  },
};
</script>

<style></style>
