//! header [<

////! side menu btn [<
const btn = document.querySelector('.menu_btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
});
////! side menu btn >]

//! header >]

//! feedback_section [<

////! swiper settings [<
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
////! swiper settings >]

//! feedback_section >]

//! animations [<
AOS.init();
//! animations >]

let dayData = document.getElementById('day_data');

let hourData = document.getElementById('hours_data');

let munuteData = document.getElementById('munutes_data');

let secondsData = document.getElementById('seconds_data');

let saleDate = new Date('2024-07-09T00:00:00').getTime();

let x = setInterval(() => {
  let now = new Date().getTime();

  let timeDifference = saleDate - now;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  dayData.textContent = days;

  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  hourData.textContent = hours;

  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  munuteData.textContent = minutes;

  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  secondsData.textContent = seconds;
}, 1000);
