const productContainer = document.getElementById('product-container');

// Fetch the product data from products.json
const fetchProducts = async () => {
  try {
    const response = await fetch('./data/products.json');
    const data = await response.json();
    const products = data.products;
    displayProducts(products);
  } catch (error) {
    console.log(error);
  }
};

// Display the products dynamically
const displayProducts = (products) => {
  const productHTML = products.map(product => {
    return `
      <div class="product">
        <div class="product__header">
          <img src="${product.image}" alt="product image">
        </div>
        <div class="product__footer">
          <h3>${product.title}</h3>
          <div class="rating">
            ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
          </div>
          <div class="product__price">
            <span class="new__price">Rs. ${product.price}</span>
          </div>
          <a href="https://wa.me/+923165355795?text=${encodeURIComponent(product.title)}%20${encodeURIComponent(product.price)}" target="_blank">
            <button class="product__btn">Buy Now</button>
          </a>
        </div>
      </div>
    `;
  }).join('');
  productContainer.innerHTML = productHTML;
};
// Fetch products on page load
window.addEventListener('DOMContentLoaded', fetchProducts);
