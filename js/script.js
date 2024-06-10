AOS.init();

const btn = document.querySelector('.menu_btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
});
