<template
  ><div>
    <!-- <v-layout row fill-height="auto" style="height: 300px;"> -->
    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore tenetur, sed modi assumenda neque ab dolorum nulla aperiam vitae ut quisquam nisi, tempora quo provident. Rerum consequuntur aliquid sunt!<p/> -->
    <!-- <v-flex xs12 sm4 md2 lg3 > -->
    <!-- <v-row fill-height="auto" style="height: 300px;"> -->
    <v-layout justify-center row fill-height="auto">
      <book-to-be-rated-card
        v-for="book in books_to_be_rated"
        :key="book.id"
        :book="book"
      />
      <!-- <v-flex xs12 sm4 md2 lg3 >
      </v-flex> -->
      <!-- {{ this.books }} -->
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
export default {
  components: {
    BookToBeRatedCard,
  },
  computed: {
    books_to_be_rated() {
      return this.$store.state.books_to_be_rated;
    },
  },
  methods: {
 getRecommendations() {
     this.$store.dispatch("getRecommendations");
      this.$router.replace('recommendation/results');
 }
  },
  mounted() {
    // this.$store.dispatch("getBooksToBeRated");
  },
};
</script>

<style></style>
