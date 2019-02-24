<template>
  <div>
    
    <header class="header white-bg">
      <div class="sidebar-toggle-box">
        <div class="fas fa-bars tooltips" @click="isShowing = !isShowing"></div>
      </div>      
      <a class="logo">CHATBOT - <span>CiTi</span></a>  
    </header>
  
    <sidebar :isShowing="isShowing"> </sidebar>

  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar.vue';
  
  export default {
    data() {
      return {
        isShowing: true
      }
    },
    components: {
      sidebar: Sidebar
    }
  }
</script>


