<template>
  <!--Side Nav-->
  <ul class="side-nav lighten-1" id="mobile-nav">
    <li>
      <router-link to="/">
        <i class="material-icons">home</i>
        Anasayfa
      </router-link>
    </li>
    <li>
      <router-link to="/hakkimizda">
        <i class="material-icons">perm_device_information</i>
        Hakkımızda
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      //Init Side nav
      $(".button-collapse").sideNav({
        edge: "right"
      });
    });
  }
};
</script>

<style scoped>
ul {
  background: rgba(21, 21, 22, 0.7);
}
ul li {
  margin-bottom: 20px;
}
ul li a {
  font-size: 24px !important;
  padding: 20px;
}
ul li a,
i {
  color: #fff !important;
}
ul li a:hover {
  color: #ee6e73 !important;
  background: transparent !important;
}
</style>
