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
    var i = 0;
    var keys = Object.keys(cart[i]) 
    var cartItem = Object.keys(cart[i]);
    var itemPrice = cart[i][Object.keys(cart[i])];
    var message = `In your cart, you have ${cartItem} at $${itemPrice}`;
  if(cart.length === 1) {
    console.log(`${message}.`);
  } else if (cart.length === 2) {
    var itemAndPrice = [];
    for (i = 0; i < cart.length; i++) {
      itemAndPrice.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    console.log(`In your cart, you have ${itemAndPrice.join(' and ')}`)
  } else {
    console.log('Your shopping cart is empty.');
  } 
}


function total() {
	var newerCart = [];
	function add(a,b) {
		return a + b;
	}
	for (var i = 0; i < cart.length; i++) {
		newerCart.push(cart[i][Object.keys(cart[i])]);
		var sum = newerCart.reduce(add);
	} 
	return sum;
}	

function removeFromCart(item) {
  //if (cart)
}

function placeOrder(cardNumber) {
  // write your code here
}
