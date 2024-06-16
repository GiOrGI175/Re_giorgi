const productsList = document.querySelector('.products_list');

const pervBtn = document.getElementById('perv-button');

const nextBtn = document.getElementById('next-button');

let currentPage = 1;

let limit = 2;

let products = [];

async function addPage() {
  let url = 'audio_products.json';

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
    img.src = `${product.img}`;
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
}

pervBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    window.scrollTo(0, 0);
    displayProducts();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(products.length / limit)) {
    currentPage = currentPage + 1;
    window.scrollTo(0, 0);
    displayProducts();
  }
});
