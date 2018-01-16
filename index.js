var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100);
 var item = {[itemName]: itemPrice};
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var cartList = "In your cart, you have "
  if(cart.length === 0){
    cartList = "Your shopping cart is empty"
  }
  cart.forEach(function(element,index){
    if(index === 0){
      cartList= cartList + `${Object.keys(cart[index])} at $${Object.values(cart[index])}`;
    }else if(cart.length === 2){
        cartList= cartList + ` and ${Object.keys(cart[index])} at $${Object.values(cart[index])}`;
    } else if(index != cart.length -1 ){
      cartList= cartList + `, ${Object.keys(cart[index])} at $${Object.values(cart[index])}`;
    }else {
      cartList= cartList + `, and ${Object.keys(cart[index])} at $${Object.values(cart[index])}`;
    }
  })
  console.log(cartList+".");
}

function total() {
  // write your code here
  var total = 0;
  cart.forEach(function(element,index){
    total = total + parseInt(Object.values(cart[index]));
  })
  return total;
}

function removeFromCart(item) {
  // write your code here
  var isInCart = false;
  cart.forEach(function(element,index){
    if(Object.keys(cart[index]) == item){
      isInCart = true;
      cart.splice(index,1);
    }
  })
  if(isInCart===false){
    console.log("That item is not in your cart.");
  }else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined || cardNumber === NaN){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
  }
}
