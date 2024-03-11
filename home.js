searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
}


//catagory slider
var swiper = new Swiper(".category-slider", {
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});


//front slider
var swiper = new Swiper('.front-slider', {
  // Install Plugin To Swiper
  loop:true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  debugger: true,
});

//trending slider
var swiper = new Swiper(".trending-slider", {
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});

//sellers section
var swiper = new Swiper(".sells-1", {
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});

//sari section
var swiper = new Swiper(".sari-1", {
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});



/* details page */
/*  most like */
var swiper = new Swiper(".most-like-2", {
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});
