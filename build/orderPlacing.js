"use strict";
//Place order for perticular product and display the recipt of that order
const products = [
    {
        id: 1,
        name: "Airpods121v2",
        price: 1200,
        quantity: 2,
    },
    {
        id: 2,
        name: "Boat",
        price: 1300,
        quantity: 4,
    },
    {
        id: 3,
        name: "JBL",
        price: 1200,
        quantity: 4,
    },
    {
        id: 4,
        name: "Oneplus",
        price: 1100,
        quantity: 1,
    },
    {
        id: 5,
        name: "Airpods Pro",
        price: 2000,
        quantity: 2,
    },
    {
        id: 6,
        name: "Airpods Nord",
        price: 1500,
        quantity: 3,
    },
    {
        id: 7,
        name: "Airpods 300",
        price: 1350,
        quantity: 3,
    },
    {
        id: 8,
        name: "Rockers 370",
        price: 2000,
        quantity: 1,
    },
];
function placeOrder(productId) {
    const selectedProduct = products.find((product) => product.id === productId);
    if (!selectedProduct) {
        console.log("Product not found. Please select the correct ID.");
        return;
    }
    console.log(`Order placed for ${selectedProduct.name} at a price of $${selectedProduct.price} for ${selectedProduct.quantity} quantity.`);
}
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotal() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
}
function displayReceipt(order) {
    console.log('Receipt:');
    order.products.forEach((product) => {
        console.log(`${product.name} - ${product.quantity}: $${product.price * product.quantity}`);
    });
    console.log('Total: $', order.getTotal());
}
const productIdToOrder = 6;
placeOrder(productIdToOrder);
const myOrder = new Order();
myOrder.addProduct(products[5]);
displayReceipt(myOrder);
