<template>
  <section class="section section-title">
    <div class="container">
      <div class="row title-row">
        <div class="title center">
          <hr />
          <h1 class="black-text darken-4">Hakkımızda</h1>
          <hr />
        </div>
      </div>
      <div class="row" data-aos="flip-left">
        <div class="col s12 m4">
          <div class="card z-depth-4">
            <div class="card-image">
              <img src="src/assets/img/people_2.jpg" class="materialboxed" />
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <h3>Ben Kimim</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            explicabo praesentium quas suscipit vel alias aliquam eveniet et
            vero nam, iste ea quia nisi laboriosam nihil! Vel eligendi ad ipsum?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            quas et. Id provident recusandae culpa magnam minima. Necessitatibus
            laborum sint consectetur voluptate, quasi sunt dignissimos, facere
            illo modi accusantium maxime.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m6" data-aos="flip-right">
          <h3>Çalışmalarım</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            explicabo praesentium quas suscipit vel alias aliquam eveniet et
            vero nam, iste ea quia nisi laboriosam nihil! Vel eligendi ad ipsum?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            quas et. Id provident recusandae culpa magnam minima. Necessitatibus
            laborum sint consectetur voluptate, quasi sunt dignissimos, facere
            illo modi accusantium maxime.
          </p>
        </div>
        <div class="col s12 m4" data-aos="flip-left">
          <div class="card z-depth-4">
            <div class="card-image">
              <img src="src/assets/img/people_3.jpg" class="materialboxed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      $(".materialboxed").materialbox();
    });
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  color: #ee6e73;
}
p {
  font-size: 18px;
}
.title-row {
  margin-top: 10px;
}

.title hr {
  border-top: 5px solid #ee6e73;
  font-size: 130px;
  width: 200px;
}

.title {
  display: flex;
  flex-direction: row;
}
</style>
