const minus = document.getElementsByClassName("fa-square-minus");
const plus = document.getElementsByClassName("fa-cart-plus");
const trash = document.getElementsByClassName("fa-trash");
const heart = document.getElementsByClassName("fa-heart");
const cards = document.getElementsByClassName("item-card");

// Function to update the price
function updatePrice(card, quantity) {
  const priceElem = card.querySelector(".item-price");
  const price = parseFloat(priceElem.getAttribute("data-price"));
  const newPrice = (price * quantity).toFixed(2);
  priceElem.innerHTML = `$${newPrice}`;
}

// Decrease quantity
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    const quantityElem = this.nextElementSibling;
    const quantity = parseInt(quantityElem.innerHTML);
    if (quantity > 0) {
      quantityElem.innerHTML = quantity - 1;
      updatePrice(this.closest(".item-card"), quantity - 1);
    }
  });
}

// Increase quantity
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    const quantityElem = this.previousElementSibling;
    const quantity = parseInt(quantityElem.innerHTML);
    if (quantity < 10) {
      quantityElem.innerHTML = quantity + 1;
      updatePrice(this.closest(".item-card"), quantity + 1);
    }
  });
}

// Toggle heart icon
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (this.classList.contains("fa-regular")) {
      this.classList.remove("fa-regular");
      this.classList.add("fa-solid");
    } else {
      this.classList.remove("fa-solid");
      this.classList.add("fa-regular");
    }
  });
}

// Remove card
for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    this.closest(".item-card").remove();
  });
}

// Set initial price data
for (let card of cards) {
  const priceElem = card.querySelector(".item-price");
  const priceText = priceElem.innerHTML.replace("$", "");
  priceElem.setAttribute("data-price", priceText);
}
