function updateCartInfo() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = calculateTotalPrice(cart);

  let items = calculateTotalQuantity(cart);

  const popup = document.querySelector('.cart_info');

  console.log(popup);

  popup.textContent = '';

  const productBoxContainer = document.createElement('div');
  productBoxContainer.className = 'productBox_Container';

  cart.forEach((product, index) => {
    console.log(product);
    const productBox = document.createElement('div');
    productBox.className = 'product_Box';

    const textContainer = document.createElement('div');
    textContainer.className = 'text_container';

    const NamePriceBox = document.createElement('div');
    NamePriceBox.className = 'Name_price_container';

    const quantityREmoveBox = document.createElement('div');
    quantityREmoveBox.className = 'quantity_remove_container';

    const imgBox = document.createElement('div');

    const img = document.createElement('img');
    img.src = `essets/webp/main/products_page/${product.img}`;
    imgBox.appendChild(img);
    imgBox.className = 'imgbox';
    productBox.appendChild(imgBox);

    const name = document.createElement('h2');
    name.textContent = product.name;
    NamePriceBox.appendChild(name);

    const price = document.createElement('span');
    price.textContent = product.price;
    price.className = 'price';
    NamePriceBox.appendChild(price);

    textContainer.appendChild(NamePriceBox);

    const quantity = document.createElement('span');
    quantity.textContent = product.quantity;
    quantity.className = 'quantity';
    quantityREmoveBox.appendChild(quantity);

    productBox.appendChild(textContainer);
    productBox.appendChild(quantityREmoveBox);

    productBoxContainer.appendChild(productBox);

    popup.appendChild(productBoxContainer);
  });

  //   const popupHead = document.createElement('div');
  //   popupHead.className = 'popupHead';

  //   const totalElemnts = document.createElement('div');
  //   totalElemnts.textContent = `CART (${items})`;
  //   popupHead.appendChild(totalElemnts);

  //   const removeAllElemnt = document.createElement('button');
  //   removeAllElemnt.textContent = 'Remove all';

  //   popupHead.appendChild(removeAllElemnt);

  //   popup.appendChild(popupHead);

  //   const totalpPrice = document.createElement('div');
  //   totalpPrice.className = 'price_container';

  //   const priceBox = document.createElement('p');
  //   priceBox.textContent = 'TOTAL';
  //   totalpPrice.appendChild(priceBox);

  //   const totalpriceBox = document.createElement('span');
  //   totalpriceBox.textContent = `$${total}`;
  //   totalpPrice.appendChild(totalpriceBox);

  //   popup.appendChild(totalpPrice);

  //   const link = document.createElement('a');
  //   link.href = 'checkout.html';

  //   const checkBtn = document.createElement('button');
  //   checkBtn.textContent = 'CHECKOUT';
  //   checkBtn.className = 'check';

  //   link.appendChild(checkBtn);
  //   popup.appendChild(link);

  //   removeAllElemnt.addEventListener('click', function removeremoveAllElemnts() {
  //     localStorage.removeItem('cart');

  //     cart = [];

  //     if ((cart = [])) {
  //       productBoxContainer.textContent = '';

  //       totalpriceBox.textContent = `$${(total = 0)}`;

  //       totalElemnts.textContent = `CART (${(items = 0)})`;
  //     }
  //   });
}
updateCartInfo();
