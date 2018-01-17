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
			itemsInCart.push([Object.keys(cart[i]), cart[i][Object.keys(cart[i])]]);
		}
	if (cart.length === 0){
		console.log('Your shopping cart is empty.');
	} else if (cart.length === 1) {
		console.log(`${message} ${itemsInCart[0][0]} at $${itemsInCart[0][1]}.`);
	} else if (cart.length === 2) {
		console.log(`${message} ${itemsInCart[0][0]} at $${itemsInCart[0][1]} and ${itemsInCart[1][0]} at $${itemsInCart[1][1]}.`);
	}/* else {
		for (i = 0; i < cart.length; i++) {
			var innerCart = itemsInCart[i].join(' at $');	
		} var outerCart =  {
			var innerCart = itemsInCart[i].join(' at $');
		}
		console.log(outerCart);
	} */
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
  for (var i = 0; i < cart.length; i++) {
    var itemPresent = cart[i].hasOwnProperty(item);
  } if (itemPresent === false){
    console.log(`That item is not in your cart.`);
  } 
} 

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0);
  }
}
