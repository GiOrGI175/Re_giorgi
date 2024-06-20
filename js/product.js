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
      const img = document.getElementById('img');

      const newP = document.getElementById('newProduct');
      newP.textContent = product.new;

      const name = document.getElementById('productName');
      name.textContent = product.name;

      const info = document.getElementById('productinfo');
      info.textContent = product.description;

      const price = document.getElementById('productPrice');
      price.textContent = product.price;
    }
  } catch (error) {
    console.error('Error');
  }
}
adIindividualPage();
