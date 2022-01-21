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

btnsAddToCart.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "in cart";
    cartNumberItems.innerHTML = Number(cartNumberItems.innerHTML) + 1;
    const selectedProduct = products.find((item) => {
      return item.id == btn.parentElement.parentElement.id;
    });
  });
});
