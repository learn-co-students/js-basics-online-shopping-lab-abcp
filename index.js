var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var itemName = item;
var itemPrice = getRandomInt(1, 100);
cart.push({[itemName]: itemPrice});
console.log(`${itemName} has been added to your cart.`);
return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if(cart.length === 1) {
    var i = 0;
    var keys = Object.keys(cart[i]) 
    var cartItem = Object.keys(cart[i]);
    var itemPrice = Object.values(cart[i]);
    var message = `In your cart, you have ${cartItem} at $${itemPrice}`;
    console.log(`${message}.`);
  } else if (cart.length === 2) {
    for (i = 0; i < cart.length; i++) {
      var newMessage = `${message} and ${cartItem} at $${itemPrice}`;
    }
    console.log(`${newMessage}.`)
  }
}


function total() {
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
