var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) ;
  var itemObject = {};
  itemObject[item] = itemPrice;
  cart.push(itemObject);
 console.log(`${item} has been added to your cart.`);  
  return cart;
}

function viewCart() {
  var cartItems = [];
  if(cart.length === 0){
    console.log(`Your shopping cart is empty.`)
  }
  else if(cart.length === 1){
     var oneItem =`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
     console.log(oneItem)
  }
  else if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)
    }
    else{
      for(var i=0;i<cart.length;i++){
        cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
        console.log(`In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`);
      }
    
        
      }
  
}

function total() {
  var priceOfEachItem = [];
  var totalValue = 0;
  
  for(var i=0;i<cart.length;i++){
    priceOfEachItem.push(cart[i][Object.keys(cart[i])])
  }
  for(var j=0;j<priceOfEachItem.length;j++){
    totalValue = priceOfEachItem[j]+=totalValue;
  }
  return totalValue
}

function removeFromCart(item) {
  for(var i = 0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for(var i = cart.length;i>=0;i--){
      cart.pop();
    }
  }else{
    console.log(`Sorry, we don't have a credit card on file for you.`);
    }
  }

//placeOrder()
