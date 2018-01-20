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
 var obj = {}
 obj[item] = Math.random()*1000/10
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length < 1)
  console.log(`Your shopping cart is empty.`)
  else {
  var x =`In your cart, you have `
  for( var i = 0; i < cart.length - 1; i++)
    x += `${Object.keys(cart)[i]} at ${cart[Object.keys(cart)[i]]}`
      x += ` and ${Object.keys(cart)[cart.length - 1]} at ${cart[Object.keys(cart)[cart.length - 1]]}`
  console.log(x)}
}

function total() {
  // write your code here
  const sum =  (a, b) => a + b;
  var values = Object.values(cart)
  return values.reduce(sum)
}

function removeFromCart(item) {
  // write your code here
  try{
  var i = cart.getIndexOf(item)
   cart.splice(i, 1);
 }
 catch(err){console.log(`That item is not in your cart.`)}
 return cart
}


function placeOrder(cardNumber) {
  // write your code here
  if(type(cardNumber) !== number)
  return `Sorry, we don'\t have a credit card on file for you.`
  else {
    return `Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`
  }

}
