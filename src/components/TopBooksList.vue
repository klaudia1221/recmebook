<template>
  <div>
    <v-layout class="mx-5 " justify-center>
      <v-btn class="mr-5" dark color="red" @click="getTopPopular()">Most popular</v-btn>
      <v-btn dark color="red" @click="getTopRated()">Best rated</v-btn>
    </v-layout>
      <v-layout justify-center row >

        <book-card v-for="book in top_list" :key="book.id" :book="book" />
      </v-layout>
  </div>
</template>

<script>
import BookCard from "./BookCard";
import axios from "axios";
export default {
  data() {
    return {
      top_books: [],
    };
  },
  methods: {
    getTopPopular() {
      this.top_books = null; 
      axios.get("http://127.0.0.1:5000/toppopular").then((res) => {
        this.top_books = res.data[0][0];
      });
    },
    getTopRated() {
      this.top_books = null;
      axios.get("http://127.0.0.1:5000/toprated").then((res) => {
        this.top_books = res.data[0][0];
      });
    },
  },
  components: {
    BookCard,
  },
  computed: {
    top_list() {
      return this.top_books;
    },
  },

  beforeCreate() {
    axios.get("http://127.0.0.1:5000/toppopular").then((res) => {
      this.top_books = res.data[0][0];
      this.dataReady = true;
      //   set book to null so correct cover is displayed immediately
      this.$store.commit("SET_BOOK", null);
    });
  },
};
</script>

<style></style>
