var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var obj = {}
  var newitem = item
  obj[newitem]= getRandomInt(1,100)
  console.log (item + " has been added to your cart.")
  cart.push(obj)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + Object.values(cart[0]) + ".")
  } else if (cart.length === 2) {
    console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + Object.values(cart[0]) + " and " + Object.keys(cart[1]) + " at $" + Object.values(cart[1]) + ".")
  } else {
  var stat = "In your cart, you have "
  var stat2 = ""
  var stat3 = "and " + Object.keys(cart[cart.length - 1]) + " at $" + Object.values(cart[cart.length - 1]) + "."
  for (let i = 0; i<cart.length - 1; i++) {
    stat2 = stat2 + Object.keys(cart[i]) + " at $" + Object.values(cart[i]) + ", "
  } 
  console.log(stat + stat2 + stat3)
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum = sum + parseInt(Object.values(cart[i]))
  } return sum
}

function removeFromCart(item) {
    var newcart = []
    for (let i = 0; i<cart.length; i++){
      if (cart[i].hasOwnProperty(item) === true) {cart.splice(i,1)}
      else {newcart.push(cart[i])}
    } 
    if (newcart.length === 0){console.log("That item is not in your cart.")}
    else {return cart}
}

function placeOrder(cardNumber) {
  var number = cardNumber
  if (number === undefined) {console.log("Sorry, we don't have a credit card on file for you.")}
  else {console.log("Your total cost is $" + total() + ", which will be charged to the card " + number.toString() + ".")
  }
  cart = []
}
