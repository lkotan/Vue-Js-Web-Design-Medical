<template>
  <!--Section : Showcase About-->
  <section class="container showcase">
    <div data-aos="flip-up">
      <h4 class="center">Medical Hizmetlerimiz Sınırsızdır</h4>
      <p class="flow-text center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ex
        rerum, fuga voluptatem provident, placeat reprehenderit vel dolorum
        necessitatibus id illum minima atque unde iure velit. Earum cupiditate
      </p>
    </div>
    <div class="row">
      <div class="col s12 m7" data-aos="zoom-in-up">
        <img src="src/assets/img/people.jpg" class="responsive-img circle" />
      </div>
      <div class="col s12 m5" data-aos="zoom-in">
        <h4 class="center">
          <span class="cyan-text">Fotoğraflar</span>
        </h4>
        <div class="row">
          <div class="col s12 m6">
            <img src="src/assets/img/image_1.jpg" class="materialboxed responsive-img" />
          </div>
          <div class="col s12 m6">
            <img src="src/assets/img/image_2.jpg" class="materialboxed responsive-img" />
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <img src="src/assets/img/image_3.jpg" class="materialboxed responsive-img" />
          </div>
          <div class="col s12 m6">
            <img src="src/assets/img/image_4.jpg" class="materialboxed responsive-img" />
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <img src="src/assets/img/image_5.jpg" class="materialboxed responsive-img" />
          </div>
          <div class="col s12 m6">
            <img src="src/assets/img/image_6.jpg" class="materialboxed responsive-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "showcase",
  mounted() {
    $(document).ready(function() {
      $(".materialboxed").materialbox();
    });
  }
};
</script>

<style scoped>
.showcase img {
  padding-top: 5px;
}

.showcase h1,
h5 {
  color: #150101;
}

.showcase p {
  font-size: 20px;
  color: #292828;
}
</style>
