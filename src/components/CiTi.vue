<template>
  <!--footer start-->
  <footer id="footer" class="site-footer">
    <div class="text-center">
     <strong>CiTi - Bot &copy; {{ new Date().getFullYear() }}</strong> by <span class="logo"> innovative-Devops-Team </span>.
    </div>
  </footer>
  <!--footer end-->
</template>

<style scoped>
  
  #footer {
    position: fixed;
    height: 30px;
    z-index: 0;    
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    background-color: #f0f3f5;
    color: #7d818c;
    align-items: center;
    padding: 0 1rem;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    border-top: 1px solid #c8ced3;    
    
  }

  .text-center
  {
    text-align: center;
    font-size: 15px;
    color: rgb(36, 33, 69);
     margin-left:10%;
  }

  .logo {
    color: #FF6C60;
  }

</style>