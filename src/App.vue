<template>
  <div>
    <app-loader v-if="isLoading"></app-loader>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Loader from "./components/shared/Loader";

export default {
  name: "app",
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 6000);
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-loader": Loader
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
</style>
