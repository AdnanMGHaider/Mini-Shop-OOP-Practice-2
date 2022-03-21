const productList = {
  products: [
    {
      title: "Air Jordan Shoe",
      imageUrl: "https://houseofheat.co/app/uploads/2021/09/air-jordan-1-high-patent-bred-555088-063-release-date.jpg",
      price: 145.5,
      description: "A red Air Jordan Shoe",
    },
    {
      title: "A Table Lamp",
      imageUrl: "https://cb2.scene7.com/is/image/CB2/KMPolarTableLampSHS21/$web_pdp_main_carousel_md$/210210135642/polar-table-lamp.jpg",
      price: 90.35,
      description: "A white table lamp",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to Cart</button>
        </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
