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
 var itemPair={[item]:Math.floor(Math.random()*100)};
 cart.push(itemPair);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length>0) {
    var text="In your cart, you have";
    if (cart.length===1) {
      text+=` ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`;
    } else if (cart.length===2) {
      text+=` ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`;
      text+=" and";
      text+=` ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}`;
    } else {
      for (let i=0; i<cart.length; i++) {
        if (i!=cart.length-1) {
          text+=` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`;
          text+=",";
        } else {
          text+=" and";
          text+=` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`;
        }
      }
    }
    text+=".";
    console.log(text);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  // write your code here
  var totalValue=0;
  for (let i=0; i<cart.length; i++) {
    totalValue+=cart[i][Object.keys(cart[i])[0]];
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  var indicator=true;
  var i=0;
  while (i<cart.length && indicator) {
    if (cart[i].hasOwnProperty(item)) {
      indicator=false;
      console.log(indicator);
      cart=[...cart.slice(0,i),...cart.slice(i+1)];
    }
    i++;
  }
  if (indicator) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[];
  }
}
