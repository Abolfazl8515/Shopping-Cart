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

const removeItemCart = (id, price, textBtn) => {
  const idItem = document.getElementById(id);
  const priceItem = price;
  totalPrice.innerHTML = Number(totalPrice.innerHTML) - priceItem;
  cartNumberItems.innerHTML--;
  idItem.remove();
  textBtn.innerHTML = "add to cart";
};

btnsAddToCart.forEach((btn) => {
  const elementCartItems = document.querySelector(".items-Cart");
  btn.addEventListener("click", () => {
    btn.textContent = "in cart";
    cartNumberItems.innerHTML = Number(cartNumberItems.innerHTML) + 1;
    const selectedProduct = products.find((item) => {
      return item.id == btn.parentElement.parentElement.id;
    });

    elementCartItems.innerHTML += `
      <div class="item" id=${selectedProduct.id}>
          <div class="image-Item">
              <img src=${selectedProduct.src} width="90" height="50" alt="Product">
          </div>
          <div class="name-Product">
              <p>${selectedProduct.price}</p>
          </div>
          <div class="btn-Remove">
              <button onclick="removeItemCart(${selectedProduct.id},${selectedProduct.price},${button})">Delete</button>
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
