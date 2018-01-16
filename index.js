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
  var inCart = "In your cart, you have ";
  if (cart.length > 0) {
    
    var soloKeyA = Object.keys(cart[0]);
    var soloKeyB = soloKeyA[0];
    
    if (cart.length === 1) {
      inCart += `${soloKeyB} at $${cart[0][soloKeyB]}.`;
      console.log(inCart);
    }
    
    for (let i = 0; i < cart.length; ++i) {
      
      var keyA = Object.keys(cart[i]);
      var keyB = keyA[0];
      
      if (i === cart.length-1) {
        inCart += `and ${keyB} at $${cart[i][keyB]}.`;
      } else {
        if (cart.length === 2) {
          inCart += `${keyB} at $${cart[i][keyB]} `;
        } else {
          inCart += `${keyB} at $${cart[i][keyB]}, `;
        }
      }
      
    }
    console.log(inCart);
  } else {
    console.log('Your shopping cart is empty.');
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
