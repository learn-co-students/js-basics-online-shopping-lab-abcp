var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var itemObj = {[item]: price};
  
  cart.push(itemObj);

  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  var i;
  var item;
  var currCart = ["In your cart, you have "]
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    for (item in cart[0]) {
      currCart = currCart + item + " at $" + cart[0][item] + ".";
      console.log(currCart); 
    }
  } else if (cart.length == 2) {
    for (item in cart[0]) {
      currCart = currCart + item + " at $" + cart[0][item];
    }
    for (item in cart[1]) {
      currCart = currCart + "and " + item + " at $" + cart[1][item];
    }
    console.log(currCart); 
  } else {
    for (i = 0; i < cart.length; i++) {
      for (item in cart[i]) {
        if (i === 0) {
          currCart = currCart + item + " at $" + cart[i][item];
        } else if (i === cart.length - 1) {
          currCart = currCart + ", and " + item + " at $" + cart[i][item] + ".";
        } else {
          currCart = currCart + ", " + item + " at $" + cart[i][item];
        }
      }
    }
    console.log(currCart);
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
