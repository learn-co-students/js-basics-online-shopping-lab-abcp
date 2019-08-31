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
 cart;
 var p = Math.floor(Math.random()*100);
 let x = {};
 x[item]  = p;
 cart.push(x);

 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  getCart();
  let items = [];
  const l = cart.length;
if (!cart.length) {
return console.log("Your shopping cart is empty.");
}

for (var i = 0; i < cart.length; i++) {
  for (var price in cart[i]){
    items.push(`${cart[i]} at $${cart[i][price]}`);
  }
}
switch (items.length) {
  case 1:
    break;
  case 2:
    items.join(" and ");
    break;
  default:
    items[l-1] = "and ".concat(items[l-1]);
    items = items.join(", ");
}
return console.log(`In your cart, you have ${items}.`);

}


function total() {
  // write your code here
  cart;
  let t = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i] ){
      t += cart[i][item];
    }
  }

  return t;
}

function removeFromCart(item) {
  // write your code here
  cart;  //calling cart
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      cart;
    }
  }
  if (!cart.length) {

  console.log("That item is not in your cart.");
}

}

function placeOrder(cardNumber) {
  // write your code here
  getCart();
  const cost = total();
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
}else {
    let c = [];
    setCart(c);
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
  }
}
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
 getCart();
 var p = Math.floor(Math.random()*100);
 let x = {};
 x[item]  = p;
 cart.push(x);

 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
getCart();

const l = cart.length;

  if (!l) {
  return console.log("Your shopping cart is empty.");
}

  let myCart = [];

  for (let i = 0; i < l; i++) {
   let itemPrice = cart[i];
   let item = Object.keys(itemPrice)[0];
   let price = itemPrice[item];

    myCart.push(`${item} at $${price}`);


}

    switch(myCart.length) {
   case 1:
     break;
   case 2:
     myCart = myCart.join(" and ");
     break;
   default:
     myCart[l-1] = "and ".concat(myCart[l-1]);
     myCart = myCart.join(", ");

 }

console.log(`In your cart, you have ${myCart}.`);

}



function total() {
  // write your code here
  cart;
  let t = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i] ){
      t += cart[i][item];
    }
  }

  return t;
}

function removeFromCart(item) {
  // write your code here
  cart;  //calling cart
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      cart;
    }
  }
  if (!cart.length) {

  console.log("That item is not in your cart.");
}

}

function placeOrder(cardNumber) {
  // write your code here
  getCart();
  const cost = total();
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
}else {
    let c = [];
    setCart(c);
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
  }
}
