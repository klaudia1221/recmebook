<template>
  <v-card class="ma-1">
    <div class="d-flex flex-no-wrap">
   
     <v-avatar class="ma-5" height="700px" min-width="450px" tile>
            <v-img :src="book.book_cover_url" object-fit: fill-height></v-img>
          </v-avatar>
          <div>
            <v-card-title>{{book.title}}</v-card-title>

            <v-card-subtitle v-text="book.authors"></v-card-subtitle>
            <v-card-subtitle class="mt-n7" v-text="book.original_publication_year"></v-card-subtitle>

            <v-card-text>
              <span v-html="book.description"></span>
            </v-card-text>
          </div>
          <div>
            <v-card class="ma-5" style="height:700px; width:450px">
              <v-card-title
                class="orange lighten-5 justify-center"
                style="font-size:1.4em"
              >Averege book rating</v-card-title>

              <v-card-text class="text-md-center mt-8" style="font-size:3em; color:orange">
                <v-icon color="orange">mdi-star</v-icon>
                {{book.average_rating}}
              </v-card-text>
              <v-card-text
                class="text-md-center"
                style="font-size:1.3em"
              >{{formatNumber(book.ratings_count) }} ratings</v-card-text>
              <v-card-text
                class="text-md-center mt-n3"
                style="font-size:1.3em"
              >{{formatNumber(book.work_text_reviews_count)}} text reviews</v-card-text>

              <v-divider class="white"></v-divider>
              <v-card-title class="orange lighten-5 justify-center" style="font-size:1.4em">Genres</v-card-title>
              <v-list disabled>
                <v-list-item-group v-model="item" color="primary">
                   <v-list-item v-for="b in book_genres" :key="b">
                    <v-list-item-content>
                      <v-card-text
                        class="text-md-center"
                        style="font-size:1.2em"
                        v-text="formatGenre(b[0])"
                      ></v-card-text>
                      <v-divider class="dark"></v-divider>
                    </v-list-item-content>
                  </v-list-item> 
               </v-list-item-group>
               </v-list>
            </v-card>
          </div>
        </div>
      </v-card> 

 
</template>

<script>
export default {
  props: ["id"],
   methods: {
    formatNumber(x) {
      return parseInt(x).toLocaleString();
    },
    formatGenre(x) {
      return x.replace(/_/g, " ");
    }},
  computed: {
    book() {
      return this.$store.state.book;
    },
    book_genres(){
      return this.$store.state.book_genres;
    }
  },
  mounted() {
    this.$store.dispatch("getBook", this.id);
    this.$store.dispatch("getBookGenres", this.id);

  }}
</script>
