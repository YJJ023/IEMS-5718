const products = [
  {
    id: 1,

    category: 'category1',
    name: 'Short-sleeved',
    price: 100,
    image: 'uniform/1.png',
    description: 'Very comfortable clothes'
  },
  {
    id: 2,
    category: 'category1',
    name: 'suit',
    price: 200,
    image: 'uniform/2.png',
    description: 'Very comfortable clothes'
  },
  {
    id: 3,
    category: 'category2',
    name: 'tracksuit',
    price: 300,
    image: 'uniform/3.png',
    description: 'Very comfortable clothes'
  },
  {
    id: 4,

    category: 'category1',
    name: 'skirt',
    price: 400,
    image: 'uniform/4.png',
    description: 'Very comfortable clothes'
  },
  {
    id: 5,
    category: 'category2',
    name: 'hardshell jacket',
    price: 500,
    image: 'uniform/5.png',
    description: 'Very comfortable clothes'
  },
  {
    id: 6,
    category: 'category3',
    name: 'cotton-padded jacket',
    price: 600,
    image: 'uniform/6.png',
    description: 'Very comfortable clothes'
  },
];
//把信息存在url中
let productDetail = document.getElementById("product-detail")
let searchParams = new URLSearchParams(window.location.search);
console.log(window.location)
// get the requiry parameter and parse it to int 
let id = parseInt(searchParams.get('id'));
//find the product and display it
let product = products.find(item => item.id === id);
productDetail.innerHTML = `
<div class="container">
<div class="product-container">
  <div class="product-image">
    <img src="${product.image}" class="img-fluid" alt="Product Image">
    
  </div>
  <div class="product-details">
    <h2>${product.name}</h2>
    <p>Price: $ ${product.price}</p>
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</div>

<hr>

<div class="product-description">
  <h2>Product Description</h1>
  <p>${product.description}</p>
</div>
</div>  
    `;

