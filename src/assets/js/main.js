$(document).ready(function () {




  //Scroll(back to top)
  $(".backtotop").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 700);
  });


  //Scroll(Navbar Color Change)
  $(window).on("scroll", function () {
    const scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("nav").addClass("transparent").css({
        borderBottom: 0
      });
      $("nav").removeClass("navbar-background");
    } else {
      $("nav").removeClass("transparent");
      $("nav").addClass("navbar-background").css({
        opacity: 0.9,
        borderBottom: "2px solid black"
      });
    }
  })

  //Loader
  $(window).on("load", () => {
    $(".preloader").addClass("complete");
    setTimeout(() => {
      $(".loader").hide("slow");
    }, 2000)
  })


  //Init Slider
  /*
  $(".slider").slider({
    indicators: false,
    height: 500,
    transition: 700,
    interval: 2000,
  });
*/

  //Init materialboxed
  // $(document).ready(function () {
  //   $(".materialboxed").materialbox();
  // });

  //Init Side nav
  /*
  $(".button-collapse").sideNav({
    edge: "right",
  });
  */


  //Swiper Slider
  /*
  const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 1,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  */

  /*
  AOS.init({
    duration: 1500,
  });
  */
})
