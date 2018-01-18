var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  let newItemObj = {[item]: price};
  cart.push(newItemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let message = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  
  } else {
      message+=`${Object.keys(cart[0])} at $${Object.values(cart[0])}`;
      if (cart.length === 2) {
         message+=` and ${Object.keys(cart[1])} at $${Object.values(cart[1])}`;
      } else {
         for (let i = 1; i< (cart.length-1); i++) {
           message+=`, ${Object.keys(cart[i])} at $${Object.values(cart[i])}`;
          }
       if (cart.length > 1) {
        message+=`, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}`;
       }
      }
   }
  message+='.';
  console.log(message);
}

function total() {
  let summa = 0;
  for (let i = 0; i < cart.length; i++) {
    summa+=parseInt(Object.values(cart[i]));
  }
  return summa;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
      }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined ) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
  let cartTotal = total();
  console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  return cart;
}
