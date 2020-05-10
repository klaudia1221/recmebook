<template
  ><div>
    <v-container>
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
export default {
  components: {
    BooksToBeRated,
  },
};
</script>

<style></style>
