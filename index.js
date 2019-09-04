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
      currCart = currCart + " and " + item + " at $" + cart[1][item] + ".";
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
  var i;
  var item;
  var totalPrice = 0;
  
  for (i = 0; i < cart.length; i++) {
    for (item in cart[i]) {
      totalPrice = totalPrice + cart[i][item];
    }
  }
  
  return totalPrice;
}

function removeFromCart(item) {
  var i;
  var cartIndex;
  var itemToSplice = false;

  for (i = 0; i < cart.length; i++) {
    cartIndex = cart[i];
    if (cartIndex.hasOwnProperty(item)) {
      itemToSplice = i;
    }
  }

  if (itemToSplice === false) {
    console.log("That item is not in your cart.");
    return cart;
  } else {
      cart.splice(itemToSplice,1);
      return cart;
  }
}

function placeOrder(cardNumber) {
  var totalCost = total();
  
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log("Your total cost is $" + totalCost +", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}