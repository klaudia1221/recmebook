<template>
  <v-flex xs12 sm4 md2 lg3>
    <v-hover v-slot:default="{ hover }" open-delay="100">
      <v-card :to="{ name: 'book', params: { id: book.book_id } }" class="ma-8">
        <!-- <v-card  class="ma-3" style="display: 'block'" hover > -->
        <!-- <div :to="{ name: 'bookdetails', params: { id: book.book_id }}"> -->
        <v-card-title class="card-title-style">{{
          book["title"]
        }}</v-card-title>
        <v-card-text class="card-title-style mt-n5">{{
          book["authors"]
        }}</v-card-text>

        <v-img
          aspect-ratio="0.68"
          object-fit:
          cover
          height="20%"
          :src="book.book_cover_url"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-1 grey--text"
              style="height: 20%;"
            >
              <v-icon class="mx-3" color="orange">mdi-star</v-icon>
              {{ book.average_rating }}
            </div>
          </v-expand-transition>
          <div>
            <v-card-actions> </v-card-actions>
          </div>
        </v-img>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
export default {
  props: ["book"],
  //   data() {
  //     return {
  //       book_id: 15,
  //     };
  //   },
};
</script>

<style>
.authors-style {
  font-size: small;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
.card-title-style {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
