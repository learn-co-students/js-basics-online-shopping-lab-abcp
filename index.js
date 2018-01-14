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
 let itemPrice = Math.floor(Math.random() * 100);
 let itemName = item;
 item = { [itemName]: itemPrice };
 console.log(`${itemName} has been added to your cart.`);
 cart.push(item) ;
 return cart;
}

/*
my failed attempts passed 10 out of 17 tests on my own (used the help of solutions to pass lesson)
i need to work on iterating over arrays more!


function viewCart() {
  // write your code here
  if(cart.length === 0){
    console.log( 'Your shopping cart is empty.' );
  }else if(cart.length === 1){

    //var cart = [ { "bananas": 17 }]; test
    console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if(cart.length ===2) {
    console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1]).join()} at $${cart[1][Object.keys(cart[1])]}.`);
  } else if (cart.length === 3) {
    console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at $${cart[0][Object.keys(cart[0])]},
     ${Object.keys(cart[1]).join()} at $${cart[1][Object.keys(cart[1])]}
     and ${Object.keys(cart[2]).join()} at $${cart[2][Object.keys(cart[2])]}.`);
  }else if (cart.length > 3){
    console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at $${cart[0][Object.keys(cart[0])]}, ${Object.keys(cart[1]).join()} at $${cart[1][Object.keys(cart[1])]}, ${Object.keys(cart[2]).join()} at $${cart[2][Object.keys(cart[2])]}, and ${Object.keys(cart[3]).join()} at $${cart[3][Object.keys(cart[3])]}.`);
  }
}/*console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at $${cart[0][Object.keys(cart[0])]},
 ${Object.keys(cart[1]).join()} at $${cart[1][Object.keys(cart[1])]}
 and ${Object.keys(cart[2]).join()} at $${cart[2][Object.keys(cart[2])]}.`);*/



  /*switch (cart.length){
    case !-1:
  return [ 'Your shopping cart is empty.' ];
  break;
  case 1:
  console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at ${Object.values(cart[0])}.`);
  break;

  case 2:
  console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at ${Object.values(cart[0])}, ${Object.keys(cart[1]).join()} at ${Object.values(cart[1])}.`);
  break;
  case 3 :
  console.log(`In your cart, you have ${Object.keys(cart[0]).join()} at ${Object.values(cart[0])}, ${Object.keys(cart[1]).join()} at ${Object.values(cart[1])}, ${Object.keys(cart[2]).join()} at ${Object.values(cart[2])}.`);
 break;
 default:
 return 'default';

 }
*/

/*
function total() {
  // write your code here
  let sum = parseInt(cart[0][Object.keys(cart[0])],10) + parseInt(cart[1][Object.keys(cart[1])],10) + parseInt(cart[2][Object.keys(cart[2])],10) + parseInt(cart[3][Object.keys(cart[3])],10);
  console.log(sum);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
*/
function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  let t = 0;

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
