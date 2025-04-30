// 1. addItem(cart, item, quantity): Adds an item to the cart.
// 2. removeItem(cart, item): Removes an item from the cart.
// 3. getTotalItems(cart): Returns the total number of items in the cart.

let cart = {

}

function addItem(cart, item, quantity) {

  let allowed = "abcdefghijklmnopqrstuvwxyz ";
  if (quantity < 0) {
    console.log('false:quan');
    return false;
  }

  for (let char of item) {
    if (!allowed.includes(char)) {
      console.log('false:name');
      return false;
    }
  }

  cart[item] = quantity;
  console.log('true');
  return true;
}

function removeItem(cart, item) {
  let itemFound = false;
  for (let it in cart) {
    if (item === it) {
      itemFound = true;
      if (itemFound) {
        delete cart[item];
        return true;
      }
    }
  }
  return false;
}

function getTotalItems(cart) {

  let objectLength = Object.keys(cart).length;
  console.log(objectLength);
  if (objectLength === 0) {
    return 0;
  }

  return Object.keys(cart).length;
}

module.exports = { addItem, removeItem, getTotalItems, cart };
