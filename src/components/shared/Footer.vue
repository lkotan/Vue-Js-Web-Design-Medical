<template>
  <!--Footer-->
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col s12 m3">
          <h5 class="white-text center">Hızlı Linkler</h5>
          <ul>
            <li>
              <router-link to="/">Anasayfa</router-link>
            </li>
            <li>
              <router-link to="/hakkimizda">Hakkımızda</router-link>
            </li>
          </ul>
        </div>
        <div class="col s12 m4 iletisim">
          <h5 class="white-text center">İletişim</h5>
          <div style="color: #26282C;">
            <div class="row">
              <div class="col s12 m2">
                <i class="material-icons white-text">location_on</i>
              </div>
              <div class="col s12 m10">
                <span>İstanbul Beşiktaş ...</span>
              </div>
            </div>
            <div class="row">
              <div class="col s12 m2">
                <i class="material-icons white-text">phone</i>
              </div>
              <div class="col s12 m10">
                <span>(555)555 55 55</span>
              </div>
            </div>
            <div class="row">
              <div class="col s12 m2">
                <i class="material-icons white-text">email</i>
              </div>
              <div class="col s12 m10">
                <span>test@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col s12 m5">
          <h5 class="white-text center">Hakkımızda</h5>
          <p style="color: #26282C;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            blanditiis molestias magnam esse quis dolorum nihil tenetur numquam
            error consequatur animi facere ut ratione, mollitia quasi eum
            aperiam. Velit, cum?
          </p>
          <a href="https://facebook.com" target="_blank" class="black-text">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="black-text">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://google.com" target="_blank" class="black-text">
            <i class="fab fa-google fa-2x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="black-text">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="black-text">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div class="footer-copyright center">
      <div class="container black-text">
        © 2020 Test Medical Tüm Hakları Saklıdır
        <a class="backtotop grey-text text-darken-4 right">
          <i class="material-icons left">arrow_drop_up</i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #b5b5b5 !important;
}
footer a i {
  font-size: 34px !important;
}
footer i:hover {
  cursor: pointer !important;
}
footer a:hover {
  font-size: 18px !important;
  color: white !important;
}
footer a {
  color: #26282c;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px !important;
}

footer p {
  font-size: 16px;
}

.iletisim span {
  font-size: 18px;
}

.iletisim i:hover {
  color: black !important;
}
</style>

