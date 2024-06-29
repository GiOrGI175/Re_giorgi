const params = new URLSearchParams(window.location.search);

console.log(window.location.search);

const productId = parseInt(params.get('id'));

async function adIindividualPage() {
  let url = 'products.json';

  // try {
  let response = await fetch(url);
  let data = await response.json();

  products = data;

  const product = products.find((product) => product.id === productId);

  console.log(product);

  if (product) {
    const img = document.querySelector('.peoduct_img');
    img.src = `essets/webp/main/products_page/${product.img}`;

    const newP = document.getElementById('newProduct');
    newP.textContent = product.new;

    const name = document.getElementById('productName');
    name.textContent = product.name;

    const info = document.getElementById('productinfo');
    info.textContent = product.description;

    const price = document.getElementById('productPrice');
    price.textContent = `$ ${product.price}`;

    const quantityInput = document.querySelector('.input_elemnt');
    quantityInput.id = `quantity-${product.id}`;

    const decrementButton = document.getElementById('decr');

    const incrementButton = document.getElementById('incr');

    incrementButton.addEventListener('click', () =>
      incrementQuantity(product.id)
    );

    decrementButton.addEventListener('click', () =>
      decrementQuantity(product.id)
    );

    const addButton = document.querySelector('.add_btn');
    addButton.addEventListener('click', () => {
      const quantity = parseInt(
        document.querySelector(`#quantity-${product.id}`).value
      );
      addToCart({ ...product, quantity });
    });

    const imgArray = product.additionalImages;

    const imgContainer = document.getElementById('imgContainer');

    imgArray.forEach((img, index) => {
      let imgclass = `img_${index + 1}`;
      let imgBoxclass = `imgBox_${index + 1}`;
      let imgBox = document.createElement('div');
      imgBox.className = imgBoxclass;

      let imgs = document.createElement('img');
      imgs.src = `./essets/webp/main/products_page/product_page/${img}`;
      imgs.className = imgclass;

      imgBox.appendChild(imgs);
      imgContainer.appendChild(imgBox);
    });
  }
  // } catch (error) {
  //   console.error('Error');
  // }
}
adIindividualPage();

function incrementQuantity(id) {
  const quantityInput = document.querySelector(`#quantity-${id}`);
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity(id) {
  const quantityInput = document.querySelector(`#quantity-${id}`);
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}

function addToCart(product) {
  console.log(product);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const productindex = cart.findIndex((p) => p.id === product.id);

  if (productindex >= 0) {
    cart[productindex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartPopup();
}

function calculateTotalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.price) * Number(p.quantity), 0);
}

function calculateTotalQuantity(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity), 0);
}

function updateCartPopup() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let total = calculateTotalPrice(cart);

  let items = calculateTotalQuantity(cart);

  const popup = document.querySelector('.popup');

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

    const button = document.createElement('button');
    button.className = 'removebtn';
    button.textContent = 'Remove';

    button.addEventListener('click', function () {
      cart.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cart));

      updateCartPopup();
    });

    quantityREmoveBox.appendChild(button);
    productBox.appendChild(textContainer);
    productBox.appendChild(quantityREmoveBox);

    productBoxContainer.appendChild(productBox);

    popup.appendChild(productBoxContainer);
  });

  const popupHead = document.createElement('div');
  popupHead.className = 'popupHead';

  const totalElemnts = document.createElement('div');
  totalElemnts.textContent = `CART (${items})`;
  popupHead.appendChild(totalElemnts);

  const removeAllElemnt = document.createElement('button');
  removeAllElemnt.textContent = 'Remove all';

  popupHead.appendChild(removeAllElemnt);

  popup.appendChild(popupHead);

  const totalpPrice = document.createElement('div');
  totalpPrice.className = 'price_container';

  const priceBox = document.createElement('p');
  priceBox.textContent = 'TOTAL';
  totalpPrice.appendChild(priceBox);

  const totalpriceBox = document.createElement('span');
  totalpriceBox.textContent = `$${total}`;
  totalpPrice.appendChild(totalpriceBox);

  popup.appendChild(totalpPrice);

  const checkBtn = document.createElement('button');
  checkBtn.textContent = 'CHECKOUT';
  checkBtn.className = 'check';

  popup.appendChild(checkBtn);

  removeAllElemnt.addEventListener('click', function removeremoveAllElemnts() {
    localStorage.removeItem('cart');

    cart = [];

    if ((cart = [])) {
      productBoxContainer.textContent = '';

      totalpriceBox.textContent = `$${(total = 0)}`;

      totalElemnts.textContent = `CART (${(items = 0)})`;
    }
  });
}
