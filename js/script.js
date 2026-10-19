//Category random order
let itemC = Array.from(document.querySelectorAll(".category-item"));

let itemRandom = itemC.sort(() => Math.random() - 0.5);

let categoryC = document.querySelector(".category-container");

function random() {
  itemRandom.forEach((item) => {
    categoryC.appendChild(item);
  });
}
random();

//Category identify click
const linksC = document.querySelectorAll(".category-link");

linksC.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const category = event.currentTarget.dataset.category;
    window.location.href = `./category.html?category=${category}`;
  });
});
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const products = [
  {
    category: "smartphones",
    h3: "Iphone 15pro",
    price: "$699",
    p: "Pro performance. Titanium design. Powerful camera.",
    image: "./img/acc01.webp",
  },
  {
    category: "headset",
    h3: "Headseat",
    price: "$129",
    p: "Pro acoustics. Wireless design. Ultra-low latency.",
    image: "./img/acc03.webp",
  },
  {
    category: "laptop",
    h3: "MacBook Air 13-inch",
    price: "$1,099",
    p: "Extreme power. Aluminum design. All-day battery.",
    image: "./img/acc02.webp",
  },
  {
    category: "applewatch",
    h3: "Apple Watch Series 12",
    price: "$399",
    p: "health sensors like ECG, advanced tracking, and premium case materials.",
    image: "./img/acc04.webp",
  },
  {
    category: "accessory",
    h3: "Apple USB-C to Digital AV Multiport Adapter",
    price: "$39",
    p: "Instant snap. Magnetic alignment. Effortless wireless charging.",
    image: "./img/acc05.webp",
  },
];

const activeCategory = products.filter((item) => item.category === category);
console.log(activeCategory);
const categoryJs = document.querySelector(".category-js");
const model = document.querySelector(".category-item");

if (category && categoryJs && model) {
  activeCategory.forEach((item) => {
    const newItem = model.cloneNode(true);
    newItem.querySelector("img").src = item.image;
    newItem.querySelector("img").alt = item.h3;
    newItem.querySelector("h3").textContent = item.h3;
    newItem.querySelector(".category-item-price").textContent = item.price;
    newItem.querySelector("p").textContent = item.p;
    categoryJs.appendChild(newItem);
  });
  model.remove();
}
