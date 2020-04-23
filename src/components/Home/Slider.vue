<template>
  <!--SECTION : Slider-->
  <section class="slider" data-aos="zoom-in">
    <ul class="slides">
      <li>
        <img src="src/assets/img/medical_6.jpg" />
        <div class="caption center-align">
          <h3>Take Your Dream Vacation</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            corporis
          </h5>
          <!-- BLOCKQUOTE -->
          <blockquote>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            quidem corrupti vero sunt architecto dolore?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit.
          </blockquote>
          <!-- <a href="#" class="btn btn-large">Learn More</a> -->
        </div>
      </li>
      <li>
        <img src="src/assets/img/medical_5.jpg" />
        <div class="caption left-align">
          <h3>We Work All Budgets</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            corporis
          </h5>
          <!-- BLOCKQUOTE -->
          <blockquote>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            quidem corrupti vero sunt architecto dolore?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit.
          </blockquote>
          <!-- <a href="#" class="btn btn-large">Learn More</a> -->
        </div>
      </li>
      <li>
        <img src="src/assets/img/medical_7.jpg" />
        <div class="caption right-align">
          <h3>Group & Individual Getaways</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            corporis
          </h5>
          <!-- BLOCKQUOTE -->
          <blockquote>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            quidem corrupti vero sunt architecto dolore?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit.
          </blockquote>
          <!-- <a href="#" class="btn btn-large">Learn More</a> -->
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "slider",
  mounted() {
    $(document).ready(function() {
      $(".slider").slider({
        indicators: false,
        height: 500,
        transition: 700,
        interval: 3000
      });
    });
  }
};
</script>

<style scoped>
/********* SLIDER ***********/
.slider img {
  width: 100% !important;
  height: 100% !important;
  background-position: center;
  background-size: cover;
}

.slider blockquote {
  font-size: 16px;
}

.slider blockquote h5 {
  color: black;
}
.slider h3 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  color: #2e2e2e;
}
.slider blockquote,
h5 {
  color: black;
}
.slider a:hover {
  color: #000 !important;
  background: #fff !important;
}

@media (max-width: 480px) {
  .slider h5 {
    display: none;
  }
}
</style>
