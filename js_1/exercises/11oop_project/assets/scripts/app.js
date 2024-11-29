//! Adding a class
class Product {
	//? Notice the syntax difference between this and an object (these fields are not required because the constructor will overwrite them anyway)
	// title = "DEFAULT";
	// imageUrl;
	// description;
	// price;

	//! This is the constructor method, the syntax is exact.
	constructor(title, image, desc, price) {
		this.title = title;
		this.imageUrl = image;
		this.description = desc;
		this.price = price;
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.className = "product-item";
		prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    return prodEl;
	}
}

class ProductList {
	products = [
		//! Creating a new product based on the class:
		new Product(
			"Bookcase",
			"https://vermontwoodsstudios.com/cdn/shop/files/Cherry-Moon-Bookcase_1.jpg?v=1728060846&width=1946",
			"A bookcase made from maple",
			159.99
		),
		{
			title: "Pillow",
			imageUrl:
				"https://target.scene7.com/is/image/Target/GUEST_ed1a5f1f-9b08-43d6-9b65-525dbf399a1e?wid=488&hei=488&fmt=pjpeg",
			price: 29.99,
			description: "A memory gel pillow",
		},
		// {
		// 	title: "Bookcase",
		// 	imageUrl:
		// 		"https://vermontwoodsstudios.com/cdn/shop/files/Cherry-Moon-Bookcase_1.jpg?v=1728060846&width=1946",
		// 	price: 159.99,
		// 	description: "A bookcase made from maple",
		// },
	];

	constructor() {}

	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");
		prodList.className = "product-list";

		for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
			prodList.append(prodEl);
		}

		renderHook.append(prodList);
	}
}

const productList = new ProductList();
productList.render();
