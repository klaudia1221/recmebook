<template>
     <v-card class="ma-1">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-5" height="700px" min-width="450px" tile>
            <v-img src="https://images.gr-assets.com/books/1458243301l/268598.jpg" object-fit: fill-height></v-img>
          </v-avatar>
          <div>
            <v-card-title>title</v-card-title>

            <v-card-subtitle v-text=author></v-card-subtitle>
            <v-card-subtitle class="mt-n7" v-text=year></v-card-subtitle>

            <v-card-text>
              <span v-html=description></span>
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
                rating
              </v-card-text>
              <v-card-text
                class="text-md-center"
                style="font-size:1.3em"
              >count ratings</v-card-text>
              <v-card-text
                class="text-md-center mt-n3"
                style="font-size:1.3em"
              >text reviews</v-card-text>

              <v-divider class="white"></v-divider>
              <v-card-title class="orange lighten-5 justify-center" style="font-size:1.4em">Genres</v-card-title>
              <v-list disabled>
                <v-list-item-group v-model="item" color="primary">
                 
                </v-list-item-group>
              </v-list>
            </v-card>
          </div>
        </div>
      </v-card>

      <!-- </v-flex> -->
      <!-- </v-layout> -->
</template>

<script>
export default {
    props: ['id']
}
</script>