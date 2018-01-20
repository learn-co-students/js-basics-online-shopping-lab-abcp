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
	var i = 0;
	var message = `In your cart, you have`;
	for (i = 0; i < cart.length; i++) {
			itemsInCart.push([`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`]);
		}
	if (cart.length === 0){
		  console.log('Your shopping cart is empty.');
	} else if (cart.length === 1) {
	    for (i = 0; i < cart.length; i++) {
	    	console.log(`${message} ${itemsInCart[i]}.`);
	  }
	} else if (cart.length === 2) {
	    console.log(`${message} ${itemsInCart.join(' and ')}.`);
	} else {
	    var allButLastItem = itemsInCart.slice(0, itemsInCart.length - 1)
	    var lastItem = itemsInCart.slice(itemsInCart.length - 1)
	    console.log(`${message} ${allButLastItem.join(', ')}, and ${lastItem}.`);
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
 
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0);
  }
}
