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
 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxV5uVgoLgizpcRsiVQjyj-Qae5vqWqM6uK6_Z7F8TSkA2JeFuiN0E8z0bft_zvsk4/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent successfully"})
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })

  
  
  