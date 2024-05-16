// # Simple Inventory Management System in JavaScript :coin: <br>
// ### following the steps <br>
// **1. Inventory and category Initialization: provided**<br>
// **2. Adding a Product** <br>
//        Error handling with validation by showing log error message <br>
//         _if the product object has all required properties_<br>
//         _if the product ID is unique to prevent duplicates *optional*_ <br>
// **3. Finding a Product** <br>
//        Error handling if the product doesn't exist in the inventory by showing log error message<br>
// **4. Updating Stock** <br>
//        Error handling with validation such as 'enter the wrong product_id' or 'update stock < 0 by showing log error message' <br>
// **5. Deleting Product**<br>
//        Confirm message when successful deleted

let categories = [
  { categoryId: 1, categoryName: "Fruits" },
  { categoryId: 2, categoryName: "Beverages" },
];

let inventory = [
  { productId: 1, productName: "Apple", category: 1, price: 0.99, stock: 150 },
  {
    productId: 2,
    productName: "Orange Juice",
    category: 2,
    price: 3.49,
    stock: 40,
  },
];

// const addProduct = (productId, productName, category, price, stock) => {
//   if (
//     productId === undefined ||
//     productName === undefined ||
//     category === undefined ||
//     price === undefined ||
//     stock === undefined
//   ) {
//     console.log("Error: All the properties must be fill");
//     return;
//   }
//   if (inventory.find((product) => product.productId === productId)) {
//     console.error("Error: Product ID must be unique.");
//     return;
//   }
//   inventory.push({ productId, productName, category, price, stock });
//   console.log("Added successfully.");
// };

// addProduct(3, "Banana", 1, 0.69, 100);
// addProduct(4, "Butter", 2, 1.49);
// addProduct(2, "Bread", 2, 2.49, 30);
// console.log(inventory);

//-------------------------------------------------------------------------------------------------------------------------------------//

// const findProduct = (productName) => {
//   const product = inventory.find(
//     (product) => productName === product.productName
//   );
//   if (product) {
//     return console.log(product);
//   } else {
//     return console.log("Item Not Found");
//   }
// };
// findProduct("Apple");

//-------------------------------------------------------------------------------------------------------------------------------------//

// const updateProductStock = (productId, newStock) => {
//   if (newStock < 0) {
//     console.log("Update stock must be positive integer");
//     return;
//   }
//   const product = inventory.find((product) => productId === product.productId);
//   if (product) {
//     product.stock = newStock
//     console.log("Updated")
//   } else {
//     console.log('Wrong Product ID')
//   }
// };

// updateProductStock(1,500)
// console.log(inventory)

//-------------------------------------------------------------------------------------------------------------------------------------//

const deleteProductByName = (productName) => {
  const productIndex = inventory.findIndex(
    (product) => productName === product.productName
  );
  if (productIndex !== -1) {
    inventory.splice(productIndex, 1);
    console.log("Deleted");
  } else {
    console.log("Product not found")
  }
};

deleteProductByName('Apple')
console.log(inventory)

////-------------------------------------------------------------------------------------------------------------------------------------////