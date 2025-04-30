// 1. addItem
// ○ Positive: Add a new item with a valid name and quantity.
// ○ Negative: Add an item with a negative quantity.
// ○ Edge Case: Add an item with a quantity of 0.

// 2. removeItem
// ○ Positive: Remove an existing item from the cart.
// ○ Negative: Attempt to remove an item not in the cart.
// ○ Edge Case: Remove the last item from the cart.

// 3. getTotalItems
// ○ Positive: Calculate the total number of items correctly.
// ○ Negative: Handle an empty cart.
// ○ Edge Case: Calculate with large quantities.


const cart = require('../cart.js');

describe("addItem", function () {
  test("should add an item with a valid name and quantity",
    function () {
      expect(cart.addItem(cart.cart, 'apple', 3)).toBe(true);
      expect(cart.addItem(cart.cart, 'lettuce', 1)).toBe(true);
    });
  test("should return false if an item is added with a negative quantity",
    () => {
      expect(cart.addItem(cart.cart, 'apple', -1)).toBe(false);
    }
  )
  test("should return true if an item is added with a quantity of 0",
    () => {
      expect(cart.addItem(cart.cart, 'peach', 0)).toBe(true);
    }
  )
});


describe("removeItem", function () {
  test("should remove an existing item from the cart",
    function () {
      expect(cart.removeItem(cart.cart, 'apple')).toBe(true);
    });
  test("should return false if an item not in the cart is attempted to be removed",
    () => {
      expect(cart.removeItem(cart.cart, '1qr.%3')).toBe(false);
    }
  )
  test("should return true if the last item is removed from the cart",
    () => {
      expect(cart.removeItem(cart.cart, 'lettuce')).toBe(true);
    }
  )
});

let testCart = {
  lettuce: 2,
  apples: 5,
  corn: 1,
};

let emptyCart = {

};

describe("getTotalItems", function () {
  test("should calculate the total number of items correctly",
    () => {
      expect(cart.getTotalItems(testCart)).toBe(3);
    }
  )
  test("should calculate a total of 0 for an empty cart",
    () => {
      expect(cart.getTotalItems(emptyCart)).toBe(0);
    }
  )
})
