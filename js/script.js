// NAV-FUNCTION






// SWIPER
var swiper = new Swiper(".slide-container", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: false,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView:1,
            slidesPerGroup: 1,
            loop: true,
        },
        520: {
            slidesPerView:1,
            slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

    },
  });


// ABOUT-TAB FUNCTION
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
      for(tablink of tablinks){
          tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }



  // EMAIL JS
 


  
  
  