<template><div > 
  <v-container>
      <!-- <v-layout row justify-center>
        <v-col cols="12" sm="6" md="3" class="justify-center " >
          <v-text-field
            dark
            centered
            label="Search"
           
          ></v-text-field>
        </v-col>
      </v-layout> -->
     <!-- </v-layout>  -->
    <!-- <div>text</div> -->
    <!-- <v-layout row wrap fill-height="auto" style="height: 300px;"> -->

<book-list/>
<!-- </v-layout> -->
     <!-- </v-layout> -->
<!-- <v-layout> -->
    <v-layout row wrap>
      
   


 </v-layout></v-container>
          </div>
</template>

<script>
import BookList from "../components/BookList";
export default {
  components: {
    BookList
  }
};
</script>

<style  >
</style>