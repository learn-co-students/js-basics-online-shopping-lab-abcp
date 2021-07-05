var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var math = Math.floor(Math.random()*(100-1+1))+1 ;
cart.push(new Object({[item]:math}));
console.log(item + ` has been added to your cart.`);
return cart;
}

   

function viewCart() {
    if(cart.length!==0){
    var allGoods =[];
    for(var i=0; i < cart.length; i++){
    var good = Object.keys(cart[i]);
      for(good in cart[i]){
       allGoods.push(good+ ` at $` + cart[i][good]);
      }
    } 
    if(cart.length ===1){
      return console.log('In your cart, you have ' + allGoods.join(', ')+ '.');
    } 
      else if (cart.length ===2){
        return console.log('In your cart, you have ' + allGoods.join(' and ')+ '.');
      }  else if (cart.length >= 3){
         return console.log('In your cart, you have ' + allGoods.slice(0, allGoods.length -1).join(', ') + ', and ' + allGoods[allGoods.length-1] +'.');
        }  
  
    } return console.log('Your shopping cart is empty.');
}
 

function total() {
  
  let total = [];
  
  for(var i=0; i < cart.length; i++){ 
    for(var price in cart[i]){
      
    total.push(cart[i][price]);
    
    var newTotal = total.reduce(function(a,b){
      return a + b;
    });
     
    }
    
  }  return newTotal;
  
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
   return cart;
  }
 }
 return console.log("That item is not in your cart.");

}


function placeOrder(cardNumber) {
  
  // write your code here
 
  if(cardNumber===undefined){
    
  console.log('Sorry, we don\'t have a credit card on file for you.');
 
  } else {
     let message = console.log("Your total cost is $"+ total() +", which will be charged to the card " + cardNumber +".");  
    cart.splice(0);
    
    return message;
  }
}
