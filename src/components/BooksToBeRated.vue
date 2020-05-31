<template
  ><div>
    <v-layout row justify-center mt-n2>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="3" class="justify-center  ">
        <v-text-field
          dark
          v-model="search"
          centered
          label="Search"
          @keydown.enter="doSearch"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer
      ><v-chip
        medium
        class="mt-9 mr-8"
        color="yellow darken-3"
        text-color="white"
        >{{ count_of_rated_books }}
        books rated
        <v-icon right>mdi-star</v-icon>
      </v-chip>
    </v-layout>
    <v-layout row fill-height="auto">
      <book-to-be-rated-card
        v-for="book in books_to_be_rated"
        :key="book.id"
        :book="book"
      />
    </v-layout>
    <v-container class="my-5">
      <v-layout justify-center row fill-height="auto">
        <v-btn
          color="red"
          large
          @click="getRecommendations"
          style="min-width: 100px, min-height:200px"
          >Get recommendations</v-btn
        >
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BookToBeRatedCard from "./BookToBeRatedCard";
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      search_results: null,
    };
  },
  components: {
    BookToBeRatedCard,
  },
  computed: {
    books_to_be_rated() {
      if (this.search.length < 1) {
        return this.$store.state.books_to_be_rated;
      } else {
        return this.search_results;
      }
    },
    count_of_rated_books() {
      return this.$store.state.books_ratings.length;
    },
  },
  methods: {
    doSearch() {
      if (this.search.length > 1) {
        axios
          .get("http://127.0.0.1:5000/books", {
            params: { search: this.search },
          })
          .then((res) => {
            this.page = null;
            this.search_results = res.data[0][0];
            // this.paginate=false;
          });
      } else {
        this.paginate = true;
        this.page = 1;
      }
    },
    getRecommendations() {
      this.$store.dispatch("getRecommendations");
      this.$router.replace("recommendation/results");
    },
  },
  
};
</script>

<style></style>
