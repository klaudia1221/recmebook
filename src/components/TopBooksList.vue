<template>
  <div>
    <v-layout class="mx-5 " justify-center>
      <!-- <v-btn class="mr-5" dark color="orange"  @click="getTopPopular()">Most popular</v-btn>
                <v-btn dark color="orange"  @click="getTopPopular()">Top rated</v-btn> -->
      <v-btn class="mr-5" dark color="red" @click="getTopPopular()">Most popular</v-btn>
      <v-btn dark color="red" @click="getTopRated()">Best rated</v-btn>
    </v-layout>
    <div v-if="dataReady">
      <v-layout justify-center row fill-height="auto">
        <book-card v-for="book in top_list" :key="book.id" :book="book" />
      </v-layout>
    </div>
  </div>
</template>

<script>
import BookCard from "./BookCard";
import axios from "axios";
export default {
  data() {
    return {
      top_books: [],
      dataReady: false,
    };
  },
  methods: {
    getTopPopular() {
      this.top_books = null; // this.dataReady=false;

      axios.get("http://127.0.0.1:5000/toppopular").then((res) => {
        this.top_books = res.data[0][0];
        // this.dataReady = true;
      });
    },
    getTopRated() {
      this.top_books = null;
      // this.dataReady=false;
      axios.get("http://127.0.0.1:5000/toprated").then((res) => {
        this.top_books = res.data[0][0];
        // this.dataReady = true;
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
// export default {
//   data() {
//     return {
//       all_books: [],
//       dataReady: false,
//       page: 1,
//       perPage: 32,
//       search: "",
//       limit: 32,
//       paginate: true,
//       visiblePages: null,
//       URL: "http://127.0.0.1:5000/books"};},
//       methods: {
//     doSearch() {
//       axios.get(this.URL, { params: { search: this.search } }).then(res => {
//         this.search = null;
//         this.visiblePages = res.data[0];
//         this.paginate=false;
//       });
//     }
//       }
// };
</script>

<style></style>
