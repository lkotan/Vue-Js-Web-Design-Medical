<template>
  <!--Section : Showcase About-->
  <section class="showcase">
    <div class="overlay">
      <div data-aos="flip-up">
        <blockquote>
          <h4 class="center">Medical Hizmetlerimiz Sınırsızdır</h4>
        </blockquote>
        <p
          class="black-text left-align"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolor eius quos tenetur laboriosam quidem ab quia laboriosam quidem ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, impedit!</p>
        <p
          class="right-align"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolor eius quos tenetur laboriosam quidem ab quia laboriosam quidem ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, impedit!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: relative;
  background: url(/src/assets/img/about.jpg);
  background-size: cover;
  background-position: center;
  height: 350px;
}
.overlay {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: rgba(21, 21, 22, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
blockquote {
  color: #fff;
  border-right: 5px solid #ee6e73;
}
p {
  font-size: 22px;
  color: #fff !important;
  padding-top: 5px;
}

@media (max-width: 600px) {
  p,
  .overlay {
    padding-top: 0;
  }
  p {
    font-size: 16px;
  }
}
</style>