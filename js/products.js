const productsList = document.querySelector('.products_list');

const pervBtn = document.getElementById('perv-button');

const nextBtn = document.getElementById('next-button');

let currentPage = 1;

let limit = 2;

let products = [];

async function addPage() {
  let url = 'products.json';

  try {
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    products = data;

    displayProducts();
  } catch (error) {
    console.error('Error');
  }
}

addPage();

function displayProducts() {
  productsList.textContent = '';

  const start = (currentPage - 1) * limit;

  const end = start + limit;

  const productDisplay = products.slice(start, end);

  productDisplay.forEach((product) => {
    const productBox = document.createElement('div');
    productBox.className = 'product';

    const imgBox = document.createElement('div');
    productBox.appendChild(imgBox);
    imgBox.className = 'img_box';

    const img = document.createElement('img');
    img.src = `essets/webp/main/products_page/${product.img}`;
    img.alt = product.name;
    imgBox.appendChild(img);

    const textBox = document.createElement('div');
    textBox.className = 'text_container';
    productBox.appendChild(textBox);

    const newProductIndicator = document.createElement('span');
    newProductIndicator.textContent = product.new;
    textBox.appendChild(newProductIndicator);

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    textBox.appendChild(productName);

    const description = document.createElement('p');
    description.textContent = product.description;
    textBox.appendChild(description);

    const seeProductBtn = document.createElement('button');
    seeProductBtn.textContent = 'See Product';
    seeProductBtn.addEventListener('click', () => {
      seeMore(product.id);
    });

    textBox.appendChild(seeProductBtn);

    productsList.appendChild(productBox);
  });

  const imgBoxes = document.querySelectorAll('.img_box');

  imgBoxes.forEach((imgBox, index) => {
    if (index % 2 !== 0) {
      imgBox.classList.add('order');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 850) {
        imgBox.classList.remove('order');
      } else {
        if (index % 2 !== 0) {
          imgBox.classList.add('order');
        }
      }
    });
  });
  btnOpacity();
}

function seeMore(productId) {
  window.location.href = `products.html?id=${productId}`;
}

pervBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    window.scrollTo(0, 0);
    displayProducts();
  }
  btnOpacity();
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(products.length / limit)) {
    currentPage = currentPage + 1;
    window.scrollTo(0, 0);
    displayProducts();
  }
  btnOpacity();
});

function btnOpacity() {
  if (currentPage === 1) {
    pervBtn.disabled = true;
    pervBtn.classList.add('opacity');
  } else {
    pervBtn.disabled = false;
    pervBtn.classList.remove('opacity');
  }

  if (currentPage === Math.ceil(products.length / limit)) {
    nextBtn.disabled = true;
    nextBtn.classList.add('opacity');
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove('opacity');
  }
}

const urlParams = new URLSearchParams(window.location.search);

const productId = parseInt(urlParams.get('id'));

const product = products.find((p) => p.id === productId);

if (product) {
  newProductIndicator.textContent = product.new;
  document.getElementById('products-name').textContent = product.name;

  document.getElementById('products-description').textContent =
    product.description;

  document.getElementById('products-price').textContent = product.price;
} else {
  document.querySelector('.products-details').textContent =
    '404 product not found';
}

// const urlParams = new URLSearchParams(window.location.search);

// const productId = parseInt(urlParams.get('id'));

// let url = 'products.json';

// const individproduct = url.find((p) => p.id === productId);

// if (individproduct) {
//   console.log('new pg');
// }
