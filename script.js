
const products = [
  {
    name: "Body Suplex premiun",
    price: "R$ 59,90",
    image: "https://via.placeholder.com/300x300.png?text=Camiseta+Grynga",
    description: "Camiseta de algodão premium com estampa exclusiva Grynga.",
    category: "blusas"
  },
  {
    name: "Moletom Grynga",
    price: "R$ 149,90",
    image: "https://via.placeholder.com/300x300.png?text=Moletom+Grynga",
    description: "Moletom grosso com capuz e bolso canguru. Ideal para o frio urbano.",
    category: "blusas"
  },
  {
    name: "Vestido Elegante",
    price: "R$ 199,90",
    image: "https://via.placeholder.com/300x300.png?text=Vestido+Elegante",
    description: "Vestido sofisticado ideal para eventos especiais.",
    category: "vestidos"
  },
  {
    name: "Short Jeans",
    price: "R$ 89,90",
    image: "https://via.placeholder.com/300x300.png?text=Short+Jeans",
    description: "Short jeans de cintura alta com lavagem clara.",
    category: "shorts"
  },
  {
    name: "Cropped Floral",
    price: "R$ 69,90",
    image: "https://via.placeholder.com/300x300.png?text=Cropped+Floral",
    description: "Cropped leve com estampa floral vibrante.",
    category: "croppeds"
  },
  {
    name: "Conjunto Casual",
    price: "R$ 159,90",
    image: "https://via.placeholder.com/300x300.png?text=Conjunto+Casual",
    description: "Conjunto de duas peças para o dia a dia.",
    category: "conjuntos"
  }
];

function displayProducts(filter = "all") {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products
    .filter(p => filter === "all" || p.category === filter)
    .forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button>Comprar 💖</button>
      `;
      container.appendChild(card);
    });
}

function filterCategory(category) {
  displayProducts(category);
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});
