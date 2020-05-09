<template
  ><div>
    <!-- <v-layout row fill-height="auto" style="height: 300px;"> -->
    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore tenetur, sed modi assumenda neque ab dolorum nulla aperiam vitae ut quisquam nisi, tempora quo provident. Rerum consequuntur aliquid sunt!<p/> -->
    <!-- <v-flex xs12 sm4 md2 lg3 > -->
    <!-- <v-row fill-height="auto" style="height: 300px;"> -->
    <v-layout row fill-height="auto" style="height: 300px;">
      <!-- <book-card v-for="book in books" :key="book.id" /> -->
      {{ this.books }}
      <v-pagination
        :length="3"
        total-visible="6"
        color="orange"
        dark
      ></v-pagination>
    </v-layout>
  </div>
</template>

<script>
// import BookCard from "./BookCard";
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    // BookCard,
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
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
.bg{ opacity: 0.7; }
<style></style>
