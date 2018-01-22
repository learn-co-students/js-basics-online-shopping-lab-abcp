var cart = [];
var middlestring = "";
var helperarray = [];
var sum = 0;

function randomnumber() {
  return Math.floor(Math.random() * 100);
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemobject = { [item]: randomnumber() };
  cart.push(itemobject);
  console.log (item + " has been added to your cart.");
  return cart;
}

function middle () {
  middlestring = "";
  for (var n = 0; n < cart.length - 1; n++) {
  middlestring = middlestring + (Object.keys(cart[n]) + " at $" + Object.values(cart[n]) + ", ");
  }
}

function viewCart() {
  
if (cart.length === 0) {
  console.log ("Your shopping cart is empty.");
  }
else if (cart.length === 1) {
  console.log ("In your cart, you have " + Object.keys(cart[0]) + " at $" + Object.values(cart[0]) + ".");
  }
else if (cart.length === 2){
  console.log ("In your cart, you have " + Object.keys(cart[0]) + " at $" + Object.values(cart[0]) + " and " + Object.keys(cart[1]) + " at $" + Object.values(cart[1]) + ".");
  }
else {
  middle();
  console.log ("In your cart, you have " + middlestring + "and " + Object.keys(cart[cart.length-1]) + " at $" + Object.values(cart[cart.length-1]) + ".");
  }
}
 
function getTotal () {
    sum = 0;
    for (var n = 0; n < helperarray.length ; n++) {
    sum += helperarray[n];
    }
  } 
  
function total() {
  if (cart.length === 0) {
  console.log (0);
  }
  else {
     helperarray = [];
     for (var n = 0; n < cart.length ; n++) {
     helperarray.push(parseInt(Object.values(cart[n])));
    }
    getTotal();
    console.log(sum);
   }
  return sum;
}

function removeFromCart(item) {
  var itemArray = [];
  for (var n = 0; n < cart.length ; n ++){
    itemArray = Object.keys(cart[n]);
    if (itemArray[0] === item) {
      cart.splice(n, 1);
      return cart;
    }
  }
      console.log ("That item is not in your cart.");
      return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log ("Sorry, we don't have a credit card on file for you.");
    }
  else {
    console.log ("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart.length = 0;
    }
}