<template>
  <!--Header-->
  <header class="main-header">
    <div class="navbar-fixed">
      <nav class="transparent">
        <div class="container">
          <div class="nav-wrapper">
            <router-link to="/" class="brand-logo black-text">Logo</router-link>
            <a href="#" data-activates="mobile-nav" class="button-collapse">
              <i class="material-icons black-text">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <router-link to="/">Anasayfa</router-link>
              </li>
              <li>
                <router-link to="/hakkimizda">Hakkimizda</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <app-side-nav></app-side-nav>
  </header>
</template>

<script>
import Sidenav from "./SideNav";

export default {
  components: {
    "app-side-nav": Sidenav
  }
};
</script>


<style scoped>
.main-header ul li a {
  color: black !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px !important;
}

.main-header ul li a:hover {
  color: #fff !important;
  background: #4f4e4e !important;
}
</style>