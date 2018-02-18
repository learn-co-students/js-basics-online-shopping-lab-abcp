var cart = [];
 
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item
 var itemPrice = Math.floor(Math.random() * 100 + 1)
 var obj = {[itemName]: itemPrice}
 cart.push(obj)
 for (var key in obj) {
   console.log (`${itemName} has been added to your cart.`)
   return cart
}}

function viewCart() {
  const l = cart.length;
  let itemsAndPrices = []
  if (cart.length === 0) {
    console.log (`Your shopping cart is empty.`)
  }
  else {
    for (var i = 0; i < l; i++) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];
      
      itemsAndPrices.push(`${item} at $${price}`)
    }
      switch (itemsAndPrices.length) 
      { case 1:
        break;
      case 2:
        itemsAndPrices = itemsAndPrices.join(' and ');
        break;
        default:
        itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
        itemsAndPrices = itemsAndPrices.join(", ");
      }
      
      console.log (`In your cart, you have ${itemsAndPrices}.`)
  }
}


function total() {
  let totalValue = 0 
  for (let i = 0, l = cart.length; i < l; i++) {
  for (let item in cart[i]) {
    totalValue += cart[i][item];
    }
  }
  return totalValue
}

function removeFromCart(item) {
      for (var i=0; i<cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
     cart = [...cart.slice(0,i), ...cart.slice(i+1)];
     return cart;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
      console.log (`Sorry, we don't have a credit card on file for you.`)
    }
  else console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart 
}
