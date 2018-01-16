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
	var itemsInCart = [];
	var pricesOfItems = [];
	var i = 0;
	if (cart.length === 0) {
		console.log('Your shopping cart is empty.');
	} else if (cart.length === 1) {
		for (i = 0; i < cart.length; i++) {
			itemsInCart.push(Object.keys(cart[i]));
			pricesOfItems.push(cart[i][Object.keys(cart[i])]);
		}
		console.log(`In your cart, you have ${itemsInCart[0]} at $${pricesOfItems[0]}.`);
	} else if (cart.length === 2) {
		for (i = 0; i < cart.length; i++) {
			itemsInCart.push(Object.keys(cart[i]));
			pricesOfItems.push(cart[i][Object.keys(cart[i])]);
		}
		console.log(`In your cart, you have ${itemsInCart[0]} at $${pricesOfItems[0]} and ${itemsInCart[1]} at $${pricesOfItems[1]}.`);
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
