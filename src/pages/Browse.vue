<template
  ><div>
    <v-container>
      <book-list />
      <v-layout row wrap> </v-layout
    ></v-container>
  </div>
</template>

<script>
import BookList from "../components/BookList";
export default {
  components: {
    BookList,
  },
};
</script>

<style></style>
