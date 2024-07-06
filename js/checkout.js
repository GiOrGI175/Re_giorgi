function calculateTotalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.price) * Number(p.quantity), 0);
}

function percentage(total) {
  let percentage = Math.floor((2 / 100) * total);

  return total + percentage;
}

function updateCartInfo() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let total = calculateTotalPrice(cart);

  let totaPercentage = percentage(total);

  console.log(totaPercentage);

  const popup = document.querySelector('.cart_info');

  console.log(popup);

  popup.textContent = '';

  const productBoxContainer = document.createElement('div');
  productBoxContainer.className = 'productBox_Container';

  const popuphead = document.createElement('div');
  popuphead.className = 'popupHead';

  const popupheadtxt = document.createElement('p');
  popupheadtxt.textContent = 'SUMMARY';

  popuphead.appendChild(popupheadtxt);
  popup.appendChild(popuphead);

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
    quantity.textContent = `x${product.quantity}`;
    quantity.className = 'quantity';
    quantityREmoveBox.appendChild(quantity);

    productBox.appendChild(textContainer);
    productBox.appendChild(quantityREmoveBox);

    productBoxContainer.appendChild(productBox);

    popup.appendChild(productBoxContainer);
  });

  const totalBox = document.createElement('div');
  totalBox.className = 'total_price';

  const Totaltxt = document.createElement('p');
  Totaltxt.textContent = 'TOTAL';

  const Total = document.createElement('span');
  Total.textContent = `$ ${total}`;

  totalBox.appendChild(Totaltxt);
  totalBox.appendChild(Total);
  popup.appendChild(totalBox);

  const shippingBox = document.createElement('div');
  shippingBox.className = 'shipping_percentage';

  const shoppingltxt = document.createElement('p');
  shoppingltxt.textContent = 'SHIPPING';

  const shipping = document.createElement('span');
  shipping.textContent = `$ ${Math.floor((2 / 100) * total)}`;

  shippingBox.appendChild(shoppingltxt);
  shippingBox.appendChild(shipping);
  popup.appendChild(shippingBox);

  const GrandtotalBox = document.createElement('div');
  GrandtotalBox.className = 'Grand_Total';

  const Grandtotaltxt = document.createElement('p');
  Grandtotaltxt.textContent = 'GRAND TOTAL';

  const Grandtotal = document.createElement('span');
  Grandtotal.textContent = `$ ${totaPercentage}`;

  GrandtotalBox.appendChild(Grandtotaltxt);
  GrandtotalBox.appendChild(Grandtotal);
  popup.appendChild(GrandtotalBox);

  const payBtn = document.createElement('button');
  payBtn.textContent = 'CONTINUE & PAY';
  payBtn.className = 'payBtn';

  popup.appendChild(payBtn);
}
updateCartInfo();

const payBtn = document.querySelector('.payBtn');

payBtn.addEventListener('click', () => {
  document.querySelector('.order').classList.add('show_order');
  document.querySelector('.overlay').classList.toggle('active');
  document.body.classList.toggle('no_scroll');
});

const forms = document.getElementById('myForm');

console.log(forms);

forms.addEventListener('submit', function (e) {
  e.preventDefault();

  let inputs = document.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }

  console.log('ki');
});

let cardnumber = document.getElementById('cardnumber');

cardnumber.addEventListener('keydown', () => {
  console.log(cardnumber.value);

  let arr = Array.from(cardnumber.value);

  console.log(arr);

  let firstspanNum = arr.slice(0, 4);

  let firstNumArr = firstspanNum.join('');

  let span1 = document.getElementById('span1');
  span1.textContent = firstNumArr;

  console.log(arr);
  console.log(firstspanNum);
  console.log(firstNumArr);

  let secondspanNum = arr.slice(4, 8);

  let secondNumArr = secondspanNum.join('');

  let span2 = document.getElementById('span2');
  span2.textContent = secondNumArr;

  let thredpanNum = arr.slice(8, 12);

  let thredNumArr = thredpanNum.join('');

  let span3 = document.getElementById('span3');
  span3.textContent = thredNumArr;

  let fourthanNum = arr.slice(12, 16);

  let fourthNumArr = fourthanNum.join('');

  let span4 = document.getElementById('span4');
  span4.textContent = fourthNumArr;
});
