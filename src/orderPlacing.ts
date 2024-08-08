//Place order for perticular product and display the recipt of that order

//add order in order table for product and write the query in function to return all the order placed in give date range

// import PromptSync from 'prompt-sync';
// const prompt = PromptSync();
// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
// }

// const products: Product[] = [
//     {
//         id: 1,
//         name: "Airpods121v2",
//         price: 1200,
//         quantity: 2,
//     },
//     {
//         id: 2,
//         name: "Boat",
//         price: 1300,
//         quantity: 4,
//     },
//     {
//         id: 3,
//         name: "JBL",
//         price: 1200,
//         quantity: 4,
//     },
//     {
//         id: 4,
//         name: "Oneplus",
//         price: 1100,
//         quantity: 1,
//     },
//     {
//         id: 5,
//         name: "Airpods Pro",
//         price: 2000,
//         quantity: 2,
//     },
//     {
//         id: 6,
//         name: "Airpods Nord",
//         price: 1500,
//         quantity: 3,
//     },
//     {
//         id: 7,
//         name: "Airpods 300",
//         price: 1350,
//         quantity: 3,
//     },
//     {
//         id: 8,
//         name: "Rockers 370",
//         price: 2000,
//         quantity: 1,
//     },

// ];

// function placeOrder(productId: number) {
//     const selectedProduct = products.find((product) => product.id === productId);
//     if (!selectedProduct) {
//         console.log("Product not found. Please select the correct ID.");
//         return;
//     }
//     console.log(`Order placed for ${selectedProduct.name} at a price of $${selectedProduct.price} for ${selectedProduct.quantity} quantity.`);

// }

// class Order {
//     products: Product[] = [];
//     addProduct(product: Product) {
//         this.products.push(product);
//     }

//     getTotal(): number {
//         return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
//     }
// }

// function displayReceipt(order: Order) {
//     console.log('Receipt:');
//     order.products.forEach((product) => {
//         if (!product) {
//             console.log("Order is not Placed \n Thank you for shopping");
//         } else {
//             console.log(`${product.name} - ${product.quantity}: $${product.price * product.quantity}`);
//         }
//     });
//     console.log('Total: $', order.getTotal());
// }

// const productIdToOrder = prompt('Enter the product ID to order : ');
// console.log(`${productIdToOrder}`);

// const myOrder = new Order();
// myOrder.addProduct(products[5]);
// displayReceipt(myOrder);





