// * Carrinho lateral

const cartButton = document.getElementById("cart-button");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCartButton = document.getElementById("close-cart");

// para abrir o carrinho
cartButton.addEventListener("click", () => {
  cartSidebar.classList.add("cart-visible");
  cartSidebar.classList.remove("cart-hidden");
});

// para fechar o carrinho
closeCartButton.addEventListener("click", () => {
  cartSidebar.classList.remove("cart-visible");
  cartSidebar.classList.add("cart-hidden");
});

// para fechar o carrinho com o ESC
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cartSidebar.classList.remove("cart-visible");
    cartSidebar.classList.add("cart-hidden");
  }
});

// * Botão de adicionar aos favoritos
const favButton = document.querySelectorAll(".fav-inactive");

const favButtons = document.querySelectorAll(".fav-inactive");

favButtons.forEach((favButton) => {
  favButton.addEventListener("click", () => {
    favButton.classList.toggle("fav-active");
  });
});
