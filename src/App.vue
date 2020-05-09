<template>
  <div id="app">
    <v-app style="
    background: rgba(0,0,0,0);" >
      <v-app-bar app>
        <v-tabs dark fixed-tabs color="white" background-color="orange">
          <v-tab to="/bookrecommendation">Get book recommendation</v-tab>
          <v-tab to="/browse">Browse books</v-tab>
          <v-tab to="/signup">SignUp</v-tab>
          <v-tab to="/login">Login</v-tab>
          <v-tab to="/top">Top 100</v-tab>
        </v-tabs>
      </v-app-bar>
                      <span class="bg"></span>

      <v-content>
      <!-- <  div class="bg"></div> -->
        <!-- <div class="bg"> -->

        <v-container fluid>        

          <!-- <div class="container">   -->
          <!-- <span class="bg"> </span> -->
    
          <router-view></router-view></v-container>
      </v-content>
    </v-app>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>
<style>
.bg {
/* position: fixed; */
width: 100%;
    height: 100%;
    /* position: fixed; */
    top: 0;
    left: 0;
     min-height: 100%;
     min-width: 1024px;
     background-size: cover;
    position: fixed;
    background-repeat: no-repeat;
  background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url("~@/assets/bg.jpg") ; 
  /* background-attachment: fixed; */
  /* height: 100vh; */
  /* background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url("~@/assets/bg.jpg") no-repeat center center ; */
    /* 
    background-attachment: fixed;
    min-height: 100%;
     top: 0;
    left: 0;  */
    /* background: url("~@/assets/bg.jpg") no-repeat center center; */
  /* height: 100%;
    min-width: 1024px;
    min-height: 100%; */
/* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; */
 
    /* filter: blur(2px); */
  /* -webkit-filter: blur(2px); */

    /* background-color: red; */
    /* transform: scale(1.1); */
}
/* .bg {
  width: 100%;
  height: 100%;
  position: relative;

  background: url("~@/assets/bg.jpg") no-repeat center center ;
  background-size: cover;

  min-height: 100%;
  min-width: 100%;
  opacity:1;
}
.myDiv .bg {
 width: 100%;
    height: 100%;
    position: fixed;
   
    
    /* background: url('~@/assets/bg.jpg') no-repeat center center fixed;
    background-size: cover; */ 
    /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; */
  /* min-height: 100%;
  min-width: 100%; */
    /* filter: blur(2px); */
  /* -webkit-filter: blur(2px); */
    /* background-color: red; */
    /* opacity: 0.4; */ 
    /* transform: scale(1.1); */

</style>
