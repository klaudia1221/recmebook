<template
  ><div>

    <v-layout justify-center row fill-height="auto" >
      <book-card  v-for="book in books" :key="book.id" :book="book" />
      <v-pagination
        :length=pages_count
        total-visible="6"
        color="orange"
        dark
        class="mb-5"
      ></v-pagination>
    </v-layout>
  </div>
</template>

<script>
import BookCard from "./BookCard";
export default {
  data() {
    return {
      search: "",
      perPage: 32,
    };
  },
  components: {
    BookCard,
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
     pages_count(){
      let books_count= this.$store.state.all_books_length;
      return Math.ceil(books_count/this.perPage);
   
     },

  },
  mounted() {
    this.$store.dispatch("getBooks");
    this.$store.dispatch("getAllBooksLength");

  },
};

</script>

<style>


</style>
