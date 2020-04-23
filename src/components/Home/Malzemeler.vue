<template>
  <!-- Swiper -->
  <div class="row swiper">
    <div class="col s12 m8" data-aos="fade-up">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="imgBx">
              <img src="/src/assets/img/medical_1.jpg" />
            </div>
            <div class="details">
              <h3>
                Maske
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, natus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptas, maxime?
                </span>
              </h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="imgBx">
              <img src="/src/assets/img/medical_2.jpg" alt />
            </div>
            <div class="details">
              <h3>
                Eldiven
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, natus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptas, maxime?
                </span>
              </h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="imgBx">
              <img src="/src/assets/img/medical_3.jpg" alt />
            </div>
            <div class="details">
              <h3>
                İğne
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, natus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptas, maxime?
                </span>
              </h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="imgBx">
              <img src="/src/assets/img/medical_5.jpg" alt />
            </div>
            <div class="details">
              <h3>
                İlaç
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, natus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptas, maxime?
                </span>
              </h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="imgBx">
              <img src="/src/assets/img/medical_6.jpg" alt />
            </div>
            <div class="details">
              <h3>
                Maske
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, natus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptas, maxime?
                </span>
              </h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="imgBx">
              <img src="/src/assets/img/medical_7.jpg" alt />
            </div>
            <div class="details">
              <h3>
                Maske
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, natus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptas, maxime?
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m4 malzemeler" data-aos="fade-down">
      <ul class="collection with-header z-depth-4">
        <li class="collection-header">
          <h4 class="center grey-text darken-4">Malzemelerimiz</h4>
        </li>
        <li class="collection-item">
          <i class="material-icons left blue-text">check</i>
          <h5 class="flow-text">Maske</h5>
        </li>
        <li class="collection-item">
          <i class="material-icons left blue-text">check</i>
          <h5 class="flow-text">İğne</h5>
        </li>
        <li class="collection-item">
          <i class="material-icons left blue-text">check</i>
          <h5 class="flow-text">Oksijen Maskesi</h5>
        </li>
        <li class="collection-item">
          <i class="material-icons left blue-text">check</i>
          <h5 class="flow-text">İlaç</h5>
        </li>
        <li class="collection-item">
          <i class="material-icons left blue-text">check</i>
          <h5 class="flow-text">Solunum Cihazı</h5>
        </li>
        <li class="collection-item">
          <i class="material-icons left blue-text">check</i>
          <h5 class="flow-text">Eldiven</h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "malzemeler",
  data() {
    return {
      swiper: null
    };
  },
  mounted() {
    //Swiper Slider
    this.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 60,
        stretch: 1,
        depth: 500,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped>
/************ SWIPER JS ****************/
.swiper {
  margin: 0 !important;
  background: #f5f5f5 !important;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 400px;
  background: #fff;
}

.swiper-slide .imgBx {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.swiper-slide .imgBx img {
  width: 100%;
  height: 100%;
}

.swiper-slide .details {
  box-sizing: border-box;
}

.swiper-slide .details h3 {
  font-size: 20px;
  text-align: center;
  line-height: 20px;
}

.swiper-slide .details h3 span {
  font-size: 16px;
  color: #f44336;
}

.swiper .malzemeler li i {
  font-size: 40px !important;
}
</style>
