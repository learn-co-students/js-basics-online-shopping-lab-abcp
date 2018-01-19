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

//TO THINK ABOUT: 
//1. create itemAtPrice variable set to ${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}?
//2. create a loop that makes the sentence length change, (invoking itemAtPrice) based on cart length?
function viewCart() {
  var n = 0
  var itemsInCart = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }else if (cart.length === 2) {
    
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    //fix below to print out correctly following the syntax
    console.log(`In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`)
  }
}
    



/*function currentLine() {
  var n = 0
  var itemsInCart = []
   if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    ...
    
  } else {
    for (var i = 2; i < cart.length; i++) {
     n++;
      itemsInCart.push(` ${n}. ${cart[i]}`)
  }
    console.log(`In your cart, you have 
    ${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}, 
    ${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}, 
    and ${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}.`)
  }
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
