const btn = document.querySelector('.menu_btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.right_arrow',
    prevEl: '.left_arrow',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 3,
    },
  },
});

AOS.init();
