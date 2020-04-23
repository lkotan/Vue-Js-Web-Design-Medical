<template>
  <div>
    <app-loader></app-loader>
    <app-showcase></app-showcase>
    <app-about></app-about>
  </div>
</template>

<script>
import About from "../../components/About/About";
import Showcase from "../../components/About/Showcase";

export default {
  name: "about",
  components: {
    "app-about": About,
    "app-showcase": Showcase
  }
};
</script>