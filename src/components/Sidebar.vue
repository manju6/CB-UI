<template>
  <div id="wrapper" class="text-left">

    <transition name="expand">
      <div v-show="isShowing">

        <!--sidebar start-->
        <aside>
          <div id="sidebar">

            <ul class="sidebar-menu">

              <li>
                <router-link to="/">
                  <i class="fas fa-home"></i>
                  <span>Dashboard</span>
                </router-link>
              </li>
  
              <li class="sub-menu">
                <router-link to="/createBot">
                  <i class="fas fa-cogs"></i>
                  <span>Create Bot</span>
                </router-link>
              </li>

              <li class="sub-menu">
                <router-link to="/manageBot">
                  <i class="fas fa-thermometer-half"></i>
                  <span>Manage Bot</span>
                </router-link>
              </li>
  
              <li class="sub-menu">
                <router-link to="/about">
                  <i class="fas fa-book"></i>
                  <span>About Us</span>
                </router-link>
              </li>
              
            </ul>

          </div>
        </aside>

        <!--sidebar end-->
      </div>

    </transition>
  </div>
</template>

<script>
  export default {
    props: ['isShowing']
  }
</script>


