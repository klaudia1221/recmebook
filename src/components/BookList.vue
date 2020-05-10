<template
  ><div v-if="dataReady">
      <v-layout row justify-center>
        <v-col cols="12" sm="6" md="3" class="justify-center " >
                   <v-text-field dark v-model="search" centered label="Search" @keydown.enter="doSearch"></v-text-field>

        </v-col>
      </v-layout>
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
      // paginate: true
    };
  },

  components: {
    BookCard,
  },methods: {
    doSearch() { 
      if(this.search.length>1){
      axios.get("http://127.0.0.1:5000/books", { params: { search: this.search } }).then(res => {
        this.page = null;
        this.books = res.data[0][0];
        // this.paginate=false;
      });
    }
    else{
    this.paginate=true;
    this.page=1;
    }}
  },
  computed: {
    pages_count() {
      let books_count = this.$store.state.all_books_length;
      return Math.ceil(books_count / this.perPage);
    },
  },
  watch: {
    page() {
      if(this.page!=null){
      axios
        .get("http://127.0.0.1:5000/books", {
          params: { page: this.page, limit: this.limit },
        })
        .then((res) => {
          this.books = res.data[0][0];
          this.$store.commit("SET_PAGE_NUMBER", this.page);
          window.scrollTo(0, 0);
        });}
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
