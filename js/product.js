const params = new URLSearchParams(window.location.search);

console.log(window.location.search);

const productId = parseInt(params.get('id'));

async function adIindividualPage() {
  let url = 'products.json';

  try {
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

      const addButton = docuemn.querySelector('.add_btn');
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
  } catch (error) {
    console.error('Error');
  }
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
    cart.push;
  }

  localStorage.setItem('cart ', JSON.stringify(cart));

  updateCartPopup();
}

function calculateTotalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity), 0);
}

function calculateTotalQuantity(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity), 0);
}

function updateCartPopup() {}