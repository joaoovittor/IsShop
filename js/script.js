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
    h3: "Studio Headset",
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

const categoryJs = document.querySelector(".category-js");
const model = document.querySelector(".category-item");

if (category && categoryJs && model) {
  activeCategory.forEach((item) => {
    const newItem = model.cloneNode(true);
    newItem.querySelector("img").src = item.image;
    newItem.querySelector("img").alt = item.h3;
    newItem.querySelector("h2").textContent = item.h3;
    newItem.querySelector(".category-item-price").textContent = item.price;
    newItem.querySelector("p").textContent = item.p;
    categoryJs.appendChild(newItem);
  });
  model.remove();
}

//Product
//generate cards
const productsCard = [
  {
    image: "./img/acc01.webp",
    h3: "Iphone 15pro",
    h4: "Smartphones",
    price: "$699",
    assessment: "(213)",
    sku: "iphone-15-pro",
  },
  {
    image: "./img/acc02.webp",
    h3: "MacBook Air 13-inch",
    h4: "Laptop",
    price: "$1099",
    assessment: "(77)",
    sku: "macbook-air-13-inch",
  },
  {
    image: "./img/acc03.webp",
    h3: "Studio Headset",
    h4: "Headset",
    price: "$129",
    assessment: "(91)",
    sku: "studio-headset",
  },
  {
    image: "./img/acc04.webp",
    h3: "Apple Watch Series 12",
    h4: "Applewatch",
    price: "$399",
    assessment: "(85)",
    sku: "apple-watch-series-12",
  },
  {
    image: "./img/acc05.webp",
    h3: "Apple USB-C to Digital AV Multiport Adapter",
    h4: "Accessory",
    price: "$39",
    assessment: "(14)",
    sku: "apple-usb-c",
  },
];
const productsContainer = document.querySelector(".products-js");
const model02 = document.querySelector(".model02");

if (productsContainer && model02) {
  productsCard.forEach((item) => {
    const newItem02 = model02.cloneNode(true);
    newItem02.querySelector("img").src = item.image;
    newItem02.querySelector("h3").textContent = item.h3;
    newItem02.querySelector("h4").textContent = item.h4;
    newItem02.querySelector(".productPrice").textContent = item.price;
    newItem02.querySelector(".assement").textContent = item.assessment;
    newItem02.dataset.sku = item.sku;
    productsContainer.appendChild(newItem02);
  });
  model02.remove();
}

//Product random card
let item02 = Array.from(document.querySelectorAll(".model02"));
let itemRandom02 = item02.sort(() => Math.random() - 0.5);

function random02() {
  itemRandom02.forEach((item) => {
    productsContainer.appendChild(item);
  });
}
random02();

//Product identify click
const identifyItem = document.querySelectorAll(".model02");

identifyItem.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const skuItem = event.currentTarget.dataset.sku;
    window.location.href = `./product.html?sku=${skuItem}`;
  });
});
const paramsProduct = new URLSearchParams(window.location.search);
const skuProduct = paramsProduct.get("sku");

const productsCardPage = [
  {
    sku: "iphone-15-pro",
    h1: "Iphone 15pro",
    price: "$699",
    p01: "Pro performance. Titanium design. Powerful camera.",
    assessment: "1340 Reviews",
    p02: "The iPhone 15 Pro features a lightweight titanium design, the powerful A17 Pro chip, a customizable Action Button, USB-C, and a pro 48 MP camera.",
    image: "./img/acc01.webp",
  },
  {
    sku: "studio-headset",
    h1: "Studio Headset",
    price: "$129",
    p01: "Pro acoustics. Wireless design. Ultra-low latency.",
    assessment: "1040 Reviews",
    p02: "Studio headsets are professional headphones with a flat frequency response for accurate sound reproduction, available in open or closed-back designs.",
    image: "./img/acc03.webp",
  },
  {
    sku: "macbook-air-13-inch",
    h1: "MacBook Air 13-inch",
    price: "$1,099",
    p01: "Extreme power. Aluminum design. All-day battery.",
    assessment: "1531 Reviews",
    p02: "The 13-inch MacBook Air features the M3 chip, an ultra-thin aluminum design, a brilliant Liquid Retina display, 18-hour battery life, and silent, fanless operation.",
    image: "./img/acc02.webp",
  },
  {
    sku: "apple-watch-series-12",
    h1: "Apple Watch Series 12",
    price: "$399",
    p01: "health sensors like ECG, advanced tracking, and premium case materials.",
    assessment: "1031 Reviews",
    p02: "The Apple Watch Series 12 features an ultra-thin design, an advanced Health Sensing System for hyper-accurate heart rate tracking, Siri AI capabilities, a brilliant Always-On Retina display, and finishes in aluminum, titanium, or premium ceramic.",
    image: "./img/acc04.webp",
  },
  {
    sku: "apple-usb-c",
    h1: "Apple USB-C to Digital AV Multiport Adapter",
    price: "$39",
    p01: "Instant snap. Magnetic alignment. Effortless wireless charging.",
    assessment: "1016 Reviews",
    p02: "The Apple USB-C to Digital AV Multiport Adapter lets you connect your Mac, iPad, or iPhone to an HDMI display, while also connecting a standard USB device and a charging cable.",
    image: "./img/acc05.webp",
  },
];

const model03 = document.querySelector(".product-container");
const pContainer = document.querySelector(".product-bg");

if (model03 && skuProduct) {
  const foundProduct = productsCardPage.find((item) => item.sku === skuProduct);

  if (foundProduct) {
    const newItem03 = model03.cloneNode(true);

    // Seleciona as 4 tags de imagem do modelo
    const imgElements = newItem03.querySelectorAll(".product-img");

    // Coloca a mesma imagem em todas elas
    imgElements.forEach((imgTag) => {
      imgTag.src = foundProduct.image;
    });

    newItem03.querySelector("h1").textContent = foundProduct.h1;
    newItem03.querySelector(".product-mini-p").textContent = foundProduct.p01;
    newItem03.querySelector(".product-info-assessment").textContent =
      foundProduct.assessment;
    newItem03.querySelector(".product-info-price").textContent =
      foundProduct.price;
    newItem03.querySelector(".product-about-p").textContent = foundProduct.p02;
    newItem03.dataset.sku = foundProduct.sku;

    pContainer.appendChild(newItem03);
    model03.remove();
  }
}

// Review generate cards
const reviewCard = [
  {
    h4: "Ethan Carter",
    subtitle: "Loyal Customer",
    p: "Everything arrived perfectly packaged and the quality was even better than I expected. The whole experience was smooth from start to finish",
    imageItem: "./img/acc06.webp",
    itemName: "Iphone 15pro",
  },
  {
    h4: "Olivia Bennett",
    subtitle: "Loyal Customer",
    p: "I’m really happy with my purchase. The product feels well-made and the attention to detail is incredible.",
    imageItem: "./img/acc03.webp",
    itemName: "Studio Headset",
  },
  {
    h4: "Lucas Anderson",
    subtitle: "Loyal Customer",
    p: "Definitely worth it. I’m very satisfied with my purchase and would recommend this store to anyone looking for quality tech products.",
    imageItem: "./img/acc02.webp",
    itemName: "MacBook Air 13inch",
  },
];
const rContainer = document.querySelector(".reviews-container");
const reviewModel = document.querySelector(".reviews-items");

if (rContainer && reviewModel) {
  reviewCard.forEach((item) => {
    const newItem04 = reviewModel.cloneNode(true);

    newItem04.classList.add("reviewModel");

    newItem04.querySelector(".reviewName").textContent = item.h4;
    newItem04.querySelector(".reviewSubtitle").textContent = item.subtitle;
    newItem04.querySelector("p").textContent = item.p;
    newItem04.querySelector(".reviewImage").src = item.imageItem;
    newItem04.querySelector(".reviews-itemName").textContent = item.itemName;
    rContainer.appendChild(newItem04);
  });

  reviewModel.remove();

  Reviewrandom();
}

// Review random card
function Reviewrandom() {
  let item04 = Array.from(rContainer.querySelectorAll(".reviewModel"));

  for (let i = item04.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [item04[i], item04[j]] = [item04[j], item04[i]];
  }

  item04.forEach((item) => {
    rContainer.appendChild(item);
  });
}

//Cart category and product identify item
const categoryButton = document.querySelector(".category-btn");
const cartitem = JSON.parse(localStorage.getItem("cart")) || [];
if (categoryButton) {
  categoryButton.addEventListener("click", function (event) {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const selectedProduct = products.find((item) => {
      return item.category === category;
    });
    if (!selectedProduct) return;
    const newCartItem = {
      nameItem: selectedProduct.h3,
      priceItem: selectedProduct.price,
      imageItem: selectedProduct.image,
    };
    cartitem.push(newCartItem);
    localStorage.setItem("cart", JSON.stringify(cartitem));
    window.location.href = "./cart.html";
  });
}

const productButton = document.querySelector(".productsBtn-js");
if (productButton) {
  productButton.addEventListener("click", function (event) {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const productSku = params.get("sku");
    const selectedProduct = productsCardPage.find((item) => {
      return item.sku === productSku;
    });
    if (!selectedProduct) return;
    const newCartItem = {
      nameItem: selectedProduct.h1,
      priceItem: selectedProduct.price,
      imageItem: selectedProduct.image,
    };
    cartitem.push(newCartItem);
    localStorage.setItem("cart", JSON.stringify(cartitem));
    window.location.href = "./cart.html";
  });
}

// Cart render products
const cartList = document.querySelector(".cart-item");
const cartTemplate = document.querySelector(".cartItemJs");

if (cartList && cartTemplate) {
  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Render products
  cartProducts.forEach((item, index) => {
    const cartClone = cartTemplate.cloneNode(true);

    cartClone.dataset.cartIndex = index;

    cartClone.querySelector("img").src = item.imageItem;
    cartClone.querySelector("img").alt = item.nameItem;
    cartClone.querySelector("h2").textContent = item.nameItem;
    cartClone.querySelector(".cart-item-price").textContent = item.priceItem;

    // Quantity
    cartClone.querySelector(".cart-item-quantity").textContent = "1";

    // Subtotal
    cartClone.querySelector(".cart-item-subtotal").textContent = item.priceItem;

    cartList.appendChild(cartClone);
  });

  // Remove original model
  cartTemplate.remove();

  // Remove products
  cartList.addEventListener("click", (event) => {
    const button = event.target.closest(".cart-item-remove");

    if (!button) return;

    const currentItem = button.closest(".cartItemJs");
    if (!currentItem) return;
    const index = Number(currentItem.dataset.cartIndex);

    cartProducts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartProducts));

    currentItem.remove();

    // Update indexes
    cartList.querySelectorAll(".cartItemJs").forEach((item, index) => {
      item.dataset.cartIndex = index;
    });

    totalPrice();
  });

  totalPrice();
}

//total
function totalPrice() {
  const itemPrice = document.querySelectorAll(".cart-item-subtotal");

  const itemPriceNumber = Array.from(itemPrice).map((item) => {
    return Number(item.textContent.replace("$", "").replaceAll(",", ""));
  });

  const total = itemPriceNumber.reduce((accumulator, price) => {
    return accumulator + price;
  }, 0);

  const totalFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);

  const subtotalShow = document.querySelector(
    ".cart-info-detail-subtotal-price",
  );

  const totalShow = document.querySelector(".cart-info-detail-03-total-price");

  if (subtotalShow) subtotalShow.textContent = totalFormatted;
  if (totalShow) totalShow.textContent = totalFormatted;
}

// Cart Count
const count = document.querySelector(".cart-count");

if (count) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartQuantity = cartItems.length;
  count.textContent = cartQuantity;
  if (cartQuantity > 0) {
    count.classList.add("active");
  }
}

// Hamburger menu
const headerNavigation = document.querySelector(".header-link");
const headerMenuButton = document.querySelector(".header-menu");
const headerNavigationList = document.querySelector("#header-navigation");

if (headerNavigation && headerMenuButton && headerNavigationList) {
  function closeHeaderMenu() {
    headerNavigation.classList.remove("active");
    headerMenuButton.setAttribute("aria-expanded", "false");
    headerMenuButton.setAttribute("aria-label", "Abrir menu");
  }

  headerMenuButton.addEventListener("click", () => {
    const isOpen = headerNavigation.classList.toggle("active");
    headerMenuButton.setAttribute("aria-expanded", String(isOpen));
    headerMenuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );
  });

  headerNavigationList.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeHeaderMenu();
  });

  document.addEventListener("click", (event) => {
    if (!headerNavigation.contains(event.target)) closeHeaderMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeHeaderMenu();
      headerMenuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 810) closeHeaderMenu();
  });
}

//Smooth Scroll

const links = document.querySelectorAll(".header-link a");

if (links) {
  links.forEach((item) => {
    item.addEventListener("click", (event) => {
      const href = item.getAttribute("href");
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) {
        const section = document.querySelector(url.hash);
        event.preventDefault();
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

//Scroll animation
if (window.location.pathname === "/index.html") {
  const section = document.querySelectorAll(".scrolljs");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: window.innerWidth < 924 ? 0 : 0.5 },
  );
  section.forEach((item) => {
    observer.observe(item);
  });
}
