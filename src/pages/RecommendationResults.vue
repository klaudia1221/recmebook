<template
  ><v-container>  
    <v-layout justify-center>   <v-chip color="red"      large   text-color="white"
>  These are the books we think you may like</v-chip>
    </v-layout>
    <v-layout justify-center row fill-height="auto">
      <book-card v-for="book in items" :key="book.id" :book="book"
    /></v-layout>
  </v-container>
</template>

<script>
import BookCard from "../components/BookCard";
export default {
  components: {
    BookCard,
  },
  computed: {
    items() {
      window.scrollTo(0, 0);
      this.$store.commit("SET_BOOK", null);
      return this.$store.getters.getRecommendedItems;
    },
  },
};
</script>

<style></style>
