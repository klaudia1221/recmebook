<template><v-container> 
    <v-layout justify-center row fill-height="auto">
      <book-card v-for="book in items" :key="book.id" :book="book" /></v-layout>
          </v-container>
</template>

<script>
import BookCard from '../components/BookCard';
export default {
  components: {
      BookCard
  },
  computed:{
    items(){  return this.$store.getters.getRecommendedItems;
    }
  }
};
</script>

<style  >

</style>