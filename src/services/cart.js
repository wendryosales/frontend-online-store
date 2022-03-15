const SHOPPING_CART = 'shoppingCart';

if (!JSON.parse(localStorage.getItem(SHOPPING_CART))) {
  localStorage.setItem(SHOPPING_CART, JSON.stringify([]));
}

export const readShoppingCart = () => JSON.parse(localStorage.getItem(SHOPPING_CART));

export const saveShoppingCart = (cartItem) => localStorage
  .setItem(SHOPPING_CART, JSON.stringify(cartItem));
