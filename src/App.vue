<template>
  <div id="app">
    <v-app
      style="
    background: rgba(0,0,0,0);"
    >
      <v-app-bar app>
        <v-tabs
          dark
          fixed-tabs
          color="white"
          background-color="yellow darken-3"
        >
          <v-tab to="/recommendation">Get book recommendation</v-tab>
          <v-tab to="/browse">Browse books</v-tab>
          <v-tab to="/top">Top 100</v-tab>
        </v-tabs>
      </v-app-bar>
      <span class="bg"></span>

      <v-content>
        <v-container fluid> <router-view></router-view></v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created() {
    this.$store.dispatch("getBooksToBeRated");
  },
};
</script>
<style>
.bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 1024px;
  background-size: cover;
  position: fixed;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("~@/assets/bg.jpg");
}
</style>
