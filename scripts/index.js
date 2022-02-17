const products = [
  { price: 130, id: 1, src: "images/product-1.jpeg" },
  { price: 210, id: 2, src: "images/product-2.jpeg" },
  { price: 120, id: 3, src: "images/product-3.jpeg" },
  { price: 60, id: 4, src: "images/product-4.jpeg" },
  { price: 50, id: 5, src: "images/product-5.jpeg" },
  { price: 150, id: 6, src: "images/product-6.jpeg" },
  { price: 260, id: 7, src: "images/product-7.jpeg" },
  { price: 190, id: 8, src: "images/product-8.jpeg" },
];

const btnsAddToCart = document.querySelectorAll(".add-To-Cart");
let cartNumberItems = document.querySelector("#numberCart");
const backDropModal = document.querySelector(".back-drop");
const modal = document.querySelector(".modal");
const shop = document.querySelector(".shop");
const confirmBtn = document.querySelector(".confirm");
const totalPrice = document.querySelector("#total-Price");
const clearBtn = document.querySelector(".clear");

const showModal = () => {
  backDropModal.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const hiddenModal = () => {
  backDropModal.classList.add("hidden");
  modal.classList.add("hidden");
};

const removeItemCart = (id, price) => {
  const idItem = document.getElementById(id);
  const priceItem = price;
  const items = document.querySelectorAll(".product");
  totalPrice.innerHTML = Number(totalPrice.innerHTML) - priceItem;
  cartNumberItems.innerHTML--;
  idItem.remove();
  items.forEach((i) => {
    if (i.id == id) {
      i.lastElementChild.firstElementChild.innerHTML = "add to cart";
    }
  });
};

const diminish = (id, price) => {
  const product = document.getElementById(id);
  const numberProduct = product.querySelector(".number-product");
  numberProduct.innerHTML = Number(numberProduct.innerHTML) - 1;
  if (numberProduct.innerHTML == 1) {
    numberProduct.previousElementSibling.style.display = "none";
  }
  totalPrice.innerHTML = Number(totalPrice.innerHTML) - price;
};

const increase = (id, price) => {
  const product = document.getElementById(id);
  const numberProduct = product.querySelector(".number-product");
  numberProduct.innerHTML = Number(numberProduct.innerHTML) + 1;
  if (numberProduct.innerHTML !== 1) {
    numberProduct.previousElementSibling.style.display = "flex";
  }
  totalPrice.innerHTML = Number(totalPrice.innerHTML) + price;
};

btnsAddToCart.forEach((btn) => {
  const elementCartItems = document.querySelector(".items-Cart");
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "in cart") {
      return;
    }
    btn.textContent = "in cart";
    cartNumberItems.innerHTML = Number(cartNumberItems.innerHTML) + 1;
    const selectedProduct = products.find(
      (item) => item.id == btn.parentElement.parentElement.id
    );
    elementCartItems.innerHTML += `
      <div class="item" id=${selectedProduct.id}>
          <div class="image-Item">
              <img src=${selectedProduct.src} width="90" height="50" alt="Product">
          </div>
          <div class="name-Product">
              <p>${selectedProduct.price}</p>
          </div>
          <div class="increment-decrement">
              <div class="decrement" style="display:none" onclick="diminish(${selectedProduct.id},${selectedProduct.price})">-</div>
              <div class="number-product">1</div>
              <div class="increment" onclick="increase(${selectedProduct.id},${selectedProduct.price})">+</div>
          </div>
          <div class="btn-Remove">
              <button onclick="removeItemCart(${selectedProduct.id},${selectedProduct.price})">Delete</button>
          </div>
      </div>
    `;

    totalPrice.innerHTML = Number(totalPrice.innerHTML) + selectedProduct.price;
    clearBtn.addEventListener("click", () => {
      const allItems = elementCartItems.children;
      for (const item of allItems) {
        item.remove();
      }
      btn.textContent = "add to cart";
      totalPrice.innerHTML = 0;
      cartNumberItems.innerHTML = 0;
    });
  });
});

shop.addEventListener("click", showModal);
backDropModal.addEventListener("click", hiddenModal);
confirmBtn.addEventListener("click", hiddenModal);
