<template
  ><div v-if="dataReady">
    <v-layout justify-center row fill-height="auto">
      <book-card v-for="book in this.books" :key="book.id" :book="book" />
      <v-pagination
        v-model="page"
        :length="pages_count"
        total-visible="6"
        color="orange"
        dark
        class="mb-5"
      ></v-pagination>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import BookCard from "./BookCard";
export default {
  data() {
    return {
      search: "",
      perPage: 36,
      page: 1,
      limit: 36,
      books: [],
      dataReady: false,
    };
  },

  components: {
    BookCard,
  },
  computed: {
    pages_count() {
      let books_count = this.$store.state.all_books_length;
      return Math.ceil(books_count / this.perPage);
    },
  },
  watch: {
    page() {
      axios
        .get("http://127.0.0.1:5000/books", {
          params: { page: this.page, limit: this.limit },
        })
        .then((res) => {
          this.books = res.data[0][0];
          this.$store.commit("SET_PAGE_NUMBER", this.page);
          window.scrollTo(0, 0);
        });
    },
  },
  mounted() {
    this.$store.dispatch("getAllBooksLength");
    this.page = this.$store.state.page;
    axios
      .get("http://127.0.0.1:5000/books", {
        params: { page: this.$store.state.page, limit: this.limit },
      })
      .then((res) => {
        this.books = res.data[0][0];
        this.dataReady = true;
        this.$store.commit("SET_BOOK", null);
      });
  },
};
</script>

<style></style>
