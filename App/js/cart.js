export const CART_KEY = "cart_items";

export function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(productId, qty = 1) {
  const cart = getCart();
  const found = cart.find(i => i.productId === productId);
  if (found) {
    found.qty += qty;
  } else {
    cart.push({ productId, qty });
  }
  saveCart(cart);
}

export function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}