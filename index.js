var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var itemPrice = Math.floor((Math.random() * 100) + 1);
var itemName = {[item]: itemPrice};

cart.push(itemName);

console.log(itemName + " has been added to your cart."); 

return cart;
  
}

function viewCart() {
  
   if (cart.length >= 1 ) {
     
   var view = "In your cart, you have "
   var array = []
   for ( let i = 0; i < cart.length; i++) {
    array.push(cart[i] + " at $" + value[i] + ".")
   }
 
 return array; }
 else {
   
   return "Your shopping cart is empty.";
   
 }
 
 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
