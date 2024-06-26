let shoppingCartIcon = document.querySelector('.cart');

shoppingCartIcon.addEventListener('click', () => {
  document.querySelector('.popup').classList.toggle('show');
});
