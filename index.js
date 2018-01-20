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
 obj[item] = Math.floor(Math.random()*100)
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
  if(cart.length>1){
  for( var i = 0; i < cart.length - 1; i++)
    x += `${Object.keys(cart)[i]} at ${cart[Object.keys(cart)[i]]}`
      x += ` and ${Object.keys(cart)[cart.length - 1]} at ${cart[Object.keys(cart)[cart.length - 1]]}`}
      else {
       x += `${Object.keys(cart)[i]} at ${cart[Object.keys(cart)[i]]}`
      }
  console.log(x)}
}

function total() {
  // write your code here
  const sum =  (a, b) => a + b;
  var values = []
  for( let key of Object.keys(cart)) {
     values.push(cart[key]);
   }
  return values.reduce(sum)
}

function removeFromCart(item) {
  // write your code here
 for(var i = 0; i < cart.length; i++)
    if(cart[i].key === item)
      {
        cart.splice(i,1)
        return cart
      }

  console.log(`That item is not in your cart.`)
  return cart
}


function placeOrder(cardNumber) {
  // write your code here
if(typeof cardNumber === 'number'|| cardNumber > 0)
  {
   var x = total()
   cart.length = 0
   return `Your total cost is ${x}, which will be charged to the card ${cardNumber}.`
 }
  else
  { cart.length = 0
      return `Sorry, we don't have a credit card on file for you.`
}
}

function placeOrder(){
  cart.length = 0
  return `Sorry, we don't have a credit card on file for you.`
}
