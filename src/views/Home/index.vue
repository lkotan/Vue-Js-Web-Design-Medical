<template>
  <div>
    <app-slider></app-slider>
    <app-showcase></app-showcase>
    <app-populer></app-populer>
    <app-follow></app-follow>
    <app-malzemeler></app-malzemeler>
  </div>
</template>

<script>
import Slider from "../../components/Home/Slider";
import Showcase from "../../components/Home/Showcase";
import Populer from "../../components/Home/Populer";
import Follow from "../../components/Home/Follow";
import Malzemeler from "../../components/Home/Malzemeler";

export default {
  name: "home",
  components: {
    "app-slider": Slider,
    "app-showcase": Showcase,
    "app-populer": Populer,
    "app-follow": Follow,
    "app-malzemeler": Malzemeler
  }
};
</script>
