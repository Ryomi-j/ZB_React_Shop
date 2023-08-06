import { CartItem } from "../App";

export const getCartCount = () => {
  const count = localStorage.getItem("CART_COUNT");
  return count ? parseInt(count) : 0;
};

export const cartData = () => {
  const cartItem = localStorage.getItem("CART_ITEM");
  let cart: { [key: string]: CartItem } = cartItem ? JSON.parse(cartItem) : {};
  return cart;
};

export const handleCount = (addOrSub: number) => {
  const count = getCartCount();
  localStorage.setItem(
    "CART_COUNT",
    `${count + addOrSub < 0 ? 0 : count + addOrSub}`
  );
};

export const handleCart = (productId: number, addOrSub: number) => {
  let cart = cartData();

  if (cart[productId] === undefined) {
    cart[productId] = { id: productId, count: 1 };
  } else {
    cart[productId].count =
      cart[productId].count + addOrSub < 0
        ? 0
        : cart[productId].count + addOrSub;
  }

  localStorage.setItem("CART_ITEM", JSON.stringify(cart));
  handleCount(addOrSub);
};
