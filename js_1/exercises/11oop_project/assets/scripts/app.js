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

class ElementAttribute {
	constructor(attributeName, attributeValue) {
		this.name = attributeName;
		this.value = attributeValue;
	}
}

//! For practicing inheritance:
class Component {
	constructor(renderHookId, shouldRender = true) {
		this.hookId = renderHookId;
		if (shouldRender) {
			this.render();
		}
	}

	render() {}

	createRootElement(tag, cssClasses, attributes) {
		const rootElement = document.createElement(tag);
		if (cssClasses) {
			rootElement.className = cssClasses;
		}
		if (attributes && attributes.length > 0) {
			for (const attribute of attributes) {
				rootElement.setAttribute(attribute.name, attribute.value);
			}
		}
		document.getElementById(this.hookId).append(rootElement);
		return rootElement;
	}
}

class ShoppingCart extends Component {
	items = [];

	set cartItems(value) {
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
			2
		)}</h2>`;
	}

	get totalAmount() {
		const sum = this.items.reduce((prevValue, curItem) => {
			return prevValue + curItem.price;
		}, 0);
		return sum;
	}

	constructor(renderHookId) {
		super(renderHookId);
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	orderProducts() {
		console.log("Ordering...");
		console.log(this.items);
	}

	render() {
		// const cartEl = document.createElement("section");
		//! Because of inheritance, we can now do this:
		const cartEl = this.createRootElement("section", "cart");
		cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
		const orderButton = cartEl.querySelector("button");
		orderButton.addEventListener("click", () => this.orderProducts());
		this.totalOutput = cartEl.querySelector("h2");
	}
}

class ProductItem extends Component {
	constructor(product, renderHookId) {
		super(renderHookId, false);
		this.product = product;
		this.render();
	}

	addToCart() {
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = this.createRootElement("li", "product-item");
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
		const addCartButton = prodEl.querySelector("button");
		addCartButton.addEventListener("click", this.addToCart.bind(this));
	}
}

class ProductList extends Component {
	products = [];

	constructor(renderHookId) {
		//! Creating a new product based on the class:
		super(renderHookId);
		this.fetchProducts();
	}

	fetchProducts() {
		this.products = [
			new Product(
				"Bookcase",
				"https://vermontwoodsstudios.com/cdn/shop/files/Cherry-Moon-Bookcase_1.jpg?v=1728060846&width=1946",
				"A bookcase made from maple",
				159.99
			),
			new Product(
				"Pillow",
				"https://target.scene7.com/is/image/Target/GUEST_ed1a5f1f-9b08-43d6-9b65-525dbf399a1e?wid=488&hei=488&fmt=pjpeg",
				"A memory foam pillow",
				29.99
			),
			// {
			// 	title: "Pillow",
			// 	imageUrl:
			// 		"https://target.scene7.com/is/image/Target/GUEST_ed1a5f1f-9b08-43d6-9b65-525dbf399a1e?wid=488&hei=488&fmt=pjpeg",
			// 	price: 29.99,
			// 	description: "A memory gel pillow",
			// },
		];
		this.renderProducts();
	}

	renderProducts() {
		for (const prod of this.products) {
			new ProductItem(prod, "prod-list");
		}
	}

	render() {
		this.createRootElement("ul", "product-list", [
			new ElementAttribute("id", "prod-list"),
		]);
		if (this.products && this.products.length > 0) {
			this.renderProducts();
		}
	}
}

class Shop extends Component {
	constructor() {
		super();
	}

	render() {
		this.cart = new ShoppingCart("app");
		new ProductList("app");
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
