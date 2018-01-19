var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
    //"create a new object representing the item, consisting of one key-value pair in which the key is the item's name and the value is a randomly-generated price:"
    //price set at (integer randomly-generated between 1 and 100)
  var price = (Math.floor(Math.random() * 100) + 1);
  //one key-value pair in which the key is the item's name and the value is a (randomly-generated) price (set above)://
  var item = { [itemName]: price };
  //add items to the cart (cart is a global variable)
  cart.push(item);
  //Upon the successful addition of a new item to the cart, print <itemName> has been added to your cart
  console.log(`${itemName} has been added to your cart.`);
  //return the updated cart
  return cart;
}

function viewCart() {
  var firstItemsInCart = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  }else if (cart.length === 2) {
    
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  } else {
    for (var i = 0; i < (cart.length - 1); i++) {
    firstItemsInCart.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
  }
 	console.log(`In your cart, you have${firstItemsInCart}, and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`);
  }
}

function total() {
  var pricesOfItems = [];
  //  iterates through the cart array, adds up the price of all items in the cart, and returns the current total value of the items in the cart
  for (var n = 0; n < cart.length; n++) {
    pricesOfItems.push(+(cart[i][Object.keys(cart[i])]))
    //below is just for testing the above. not what i want to happen in the final version of the function
}return pricesOfItems
}


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
