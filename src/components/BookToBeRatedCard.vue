<template>
  <v-flex xs12 sm4 md2 lg3>
    <v-hover v-slot:default="{ hover }" open-delay="100">
      <v-card :to="{ name: 'book', params: { id: book.book_id } }" class="ma-8">
        <!-- <v-card  class="ma-3" style="display: 'block'" hover > -->
        <!-- <div :to="{ name: 'bookdetails', params: { id: book.book_id }}"> -->
        <v-card-title class="card-title-style mt-n2">{{
          book["title"]
        }}</v-card-title>
        <v-card-text class="card-title-style mt-n6 ">{{
          book["authors"]
        }}</v-card-text>

        <v-img
          aspect-ratio="0.68"
          object-fit:
          cover
          height="20%"
          :src="book.book_cover_url"
          class="mt-n2"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-1 grey--text"
              style="height: 20%;"
            >
              <v-icon class="mx-3" color="orange">mdi-star</v-icon>
              {{ book.average_rating }}
            </div>
          </v-expand-transition>
          <div>
            <v-card-actions> </v-card-actions>
          </div> </v-img
        ><v-rating
          class="text-center"
          background-color="grey lighten-1"
          @input="addRating(book.book_id, $event)"
          delete
          hover
          @click.native.stop.prevent
          color="red"
        >
          <!-- v-model="temp_book_ratings[book.book_id]" -->
        </v-rating>
        <div class="text-center">
          <v-btn
            class="mb-4 mx-2 mt-1"
            color="red"
            @click="addToNotInterested(book.book_id)"
            @click.native.stop.prevent
            delete
            dark
          >
            NOT INTERESTED
            <v-icon dark right>mdi-cancel</v-icon><v-spacer></v-spacer>
          </v-btn>
          <v-btn
            class="mb-4 mx-2 mt-1"
            color="orange"
            delete
            @click="addToToRead(book.book_id)"
            dark
            @click.native.stop.prevent
          >
            TO READ
            <v-icon dark right>mdi-eye-off</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
export default {
  props: ["book"],
  methods: {
    // contains(arr, key, val) {
    // for (var i = 0; i < arr.length; i++) {
    //     if(arr[i][key] === val) return true;
    // }
    // return false;
  
  addRating(book_id, value) {
    this.$store.commit("ADD_RATING", { book_id, value });
    if (this.$store.getters.getExcludedBooks.indexOf(book_id) != -1) {
      this.$store.dispatch("addNewBookToBeRated");
    }
  },
  addToToRead(book_id) {
    this.$store.commit("ADD_TO_TO_READ", book_id);
    if (this.$store.getters.getExcludedBooks.indexOf(book_id) != -1) {
      this.$store.dispatch("addNewBookToBeRated");
    }
  },
  addToNotInterested(book_id) {
    this.$store.commit("ADD_TO_NOT_INTERESTED", book_id);
    if (this.$store.getters.getExcludedBooks.indexOf(book_id) != -1) {
      this.$store.dispatch("addNewBookToBeRated");
    }
  }}
};
</script>

<style>
.authors-style {
  font-size: small;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
.card-title-style {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
