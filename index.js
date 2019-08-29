var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var ran = Math.floor(Math.random() * 100);
  var newObj = {[item]: ran};
  cart.push(newObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var inCart = "In your cart, you have ";
    
    if (cart.length === 1) {                //used when the cart is only 1 item
      var soloKeyA = Object.keys(cart[0]);  //returns an array of the key value
      var soloKeyB = soloKeyA[0];           //sets the var to the key value
      
      inCart += `${soloKeyB} at $${cart[0][soloKeyB]}.`; //gets the value of the key at cart[i]
      console.log(inCart);
      return;
    }
    
    for (let i = 0; i < cart.length; ++i) { //used when the cart is 2+ items
      
      var keyA = Object.keys(cart[i]);      //returns an array of the key value
      var keyB = keyA[0];                   //sets the var to the key value
      
      if (i === cart.length-1) {            //checks when we reached the last item
        inCart += `and ${keyB} at $${cart[i][keyB]}.`;
      } else {
        if (cart.length === 2) {            //used when the cart is only 2 items
          inCart += `${keyB} at $${cart[i][keyB]} `;
        } else {
          inCart += `${keyB} at $${cart[i][keyB]}, `;
        }
      }
      
    }
    console.log(inCart);
    return;
  } else {
    console.log('Your shopping cart is empty.');
    return;
  }
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; ++i) {
    var keyA = Object.keys(cart[i]);
    var keyB = keyA[0];
    
    sum += cart[i][keyB];
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; ++i) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return;
  }
  
  var sum = total();
  if (parseInt(cardNumber, 10) && cardNumber.toString().length === 8) {
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0);
  } else {
    return 'You did not put in a valid, 8-digit credit card number';
  }
}
