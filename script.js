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



/* 
showProductList('category1') */
function showProductList(category) {//展示category的商品列表
  let productList = document.getElementById('product-list');
  let productPage = document.getElementById("productPage")
  //购物列表展示
  productList.style.display = 'grid'
  //购物列表隐藏
  productPage.style.display = 'none'

  productList.innerHTML = '';
  const filteredProducts = products.filter(product => product.category === category);//筛选出商品中这类商品
  filteredProducts.forEach(product => {//for循环展示
    const productItem = document.createElement('div');
    productItem.className = 'product';
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.image}" class="product-img" onclick="jumpToProductDetail(${product.id})">
      <div class="product-name " id="product${product.id}" onclick="jumpToProductDetail(${product.id})"><a href="#">${product.name}</a></div>
      <div class="product-price">$${product.price}</div>
      <button type="button" class="btn btn-primary" onclick="productDetail(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productItem);//添加dom元素
  });


  //跳转栏逻辑
  let thirdNav = document.getElementById("third-nav");
  let secondNav = document.getElementById("second-nav");
  let secondNavLink = secondNav.querySelector('a');

  secondNavLink.innerText = category;
  secondNav.style.display = 'inline'
  thirdNav.style.display = 'none'
}


// // 创建 URLSearchParams 对象，传入 URL 中的查询参数部分
// let searchParams = new URLSearchParams(window.location.search);

// // get the current category
// let category = searchParams.get('categpry');


// 展示产品详情
function jumpToProductDetail(productId) {

  let product = products.find(product => product.id === productId);//在列表中找到这个产品
  let productList = document.getElementById('product-list');
  let productPage = document.getElementById("productPage")

  let id = productId
  // 构造这个url
  var url = 'productDetail.html?id=' + encodeURIComponent(id);

  // 给productPage这个dom添加一个src属性
  productPage.src = url;

  //跳转后详情页dom展示
  productPage.style.display = 'block'
  //跳转后菜单页dom隐藏
  productList.style.display = 'none'

  //nav的几个值
  let thirdNav = document.getElementById("third-nav");
  let secondNav = document.getElementById("second-nav");

  let thirdNavLink = thirdNav.querySelector('a');
  thirdNavLink.innerText = /* "product" + */ product.name /* productId */;
  thirdNav.style.display = 'inline'

}


function backToCategory() { //点第二列的时候跳转回去
  let productList = document.getElementById('product-list');
  let productPage = document.getElementById("productPage");
  productList.style.display = 'grid'
  productPage.style.display = 'none'

  //change the hierarchical navigation menu 
  let thirdNav = document.getElementById("third-nav");
  let secondNav = document.getElementById("second-nav");
  secondNav.style.display = 'inline'

  thirdNav.style.display = 'none'
}

function showDropdown() {//展示购物车
  document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {// 隐藏购物车
  document.getElementById("dropdown").style.display = "none";
}

