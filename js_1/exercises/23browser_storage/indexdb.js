//! Using IndexedDB

const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

// Create a 'database'
let db;
const dbRequest = indexedDB.open("StorageExample", 1);

// Add success/error event listeners to it:
dbRequest.onsuccess = function (e) {
	db = e.target.result;
};

dbRequest.onupgradeneeded = function (e) {
	db = e.target.result;
	const objStore = db.createObjectStore("products", { keyPath: "id" });

	objStore.transaction.oncomplete = function (e) {
		const productsStore = db
			.transaction("products", "readwrite")
			.objectStore("products");
		productsStore.add({
			id: "p1",
			title: "First product",
			price: 12.99,
			tags: ["Expensive", "Luxury"],
		});
	};
};

dbRequest.onerror = function (e) {
	console.log(`Error! ${e}`);
};

storeButton.addEventListener("click", () => {
	if (!db) {
		return;
	}
	const productsStore = db
		.transaction("products", "readwrite")
		.objectStore("products");
	productsStore.add({
		id: "p2",
		title: "Second product",
		price: 17.99,
		tags: ["Expensive", "Luxury"],
	});
});

retrieveButton.addEventListener("click", () => {
  const productsStore = db
  .transaction("products", "readwrite")
  .objectStore("products");
  const request = productsStore.get('p2');
  request.onsuccess = function() {
    console.log(request.result);
  }
});
