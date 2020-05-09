<template>

  <v-card class="ma-8" max-width="344">
    <v-img
      cover
      src="https://images.gr-assets.com/books/1432712438m/13154150.jpg"
    ></v-img>
    <router-link :to="{ name: 'product', params: { id: 25 } }"
      >"jsfmkjmskf"</router-link
    >
    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      book_id: 15,
    };
  },
};
</script>

<style>
.img-style {
  height: 10%;
  width: 100%;
}
</style>
