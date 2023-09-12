const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};
// save to local storage
const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const addLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  saveCartToLocalStorage(cart);
};
export { addLocalStorage, getStoredCart };
