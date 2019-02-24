<template>
  <div id="app">
  
    <appHeader></appHeader>

    <router-view></router-view>
  
    <appFooter> </appFooter>
  
  </div>
</template>



<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<style>
  #app {    
     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     color: #2c3e50;
     overflow: hidden;
  }
  
    
  /* Website Layout */
  @import './assets/css/layout.css';

  /* FontAwesome Icons */
  @import 'https://use.fontawesome.com/releases/v5.6.3/css/all.css';

  /*css - templates */
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";

  </style>
