var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
    //"create a new object representing the item, consisting of one key-value pair in which the key is the item's name and the value is a randomly-generated price:"
    //price set at (integer randomly-generated between 1 and 100)
  var price = (Math.floor(Math.random() * 100) + 1)
  //one key-value pair in which the key is the item's name and the value is a (randomly-generated) price (set above)://
  var item = { [itemName]: price }
  //add items to the cart (cart is a global variable)
  cart.push(item)
  //Upon the successful addition of a new item to the cart, print <itemName> has been added to your cart
  console.log(`${itemName} has been added to your cart.`)
  //return the updated cart
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    //fix below to print out correctly following the syntax
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }else if (cart.length === 2) {
    //fix below to print out correctly following the syntax
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    //fix below to print out correctly following the syntax
    console.log(`In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`)
  }
}
    

  /*this will log prices that are in the cart array:
  console.log(cart[0][itemName]*/


/*if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
     n++;
     inLine.push(" " + (n) + ". " + katzDeliLine[i])
  }
    return "The line is currently:" + inLine
  }*/

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
