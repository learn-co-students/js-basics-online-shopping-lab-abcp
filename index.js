var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var randPrice = Math.floor(Math.random() * 100 + 1);
 
 cart.push(Object.assign({}, { [item]: randPrice }));
 
 console.log(`${item} has been added to your cart.`);
 
 return cart;
}

function viewCart() {
  // write your code here
  var cartString = `In your cart, you have`;
  let cartLen = cart.length;
  
  for (var i = 0; i < cartLen; i++){
    
    // Oxford comma it up
    if(i > 0 && cartLen > 2){
      cartString += `,`;
    }
    
    // Add an 'and' for more than 1 item or last item
    if (i > 0 && i === cartLen - 1){
      cartString += ` and`;
    }
    
    cartString += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`;
  }
  
  cartString += `.`;
  
  if (cartLen > 0){
    console.log(cartString);
  }
  else{
    console.log(`Your shopping cart is empty.`);
  }
  
  return cart;
}

function total() {
  // write your code here
  var cartTotal = 0;
  let cartLen = cart.length;
  
  for (var i = 0; i < cartLen; i++){
    cartTotal += Object.values(cart[i])[0];
  }
  
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  let cartLen = cart.length;
  
  for (let i = 0; i < cartLen; i++){
    if (item in cart[i]){
      cart.splice(i, 1);
      return cart;
    }
  }
  
  // Exited for loop with nothing
  console.log(`That item is not in your cart.`);
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
