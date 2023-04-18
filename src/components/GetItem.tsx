import { CartItem } from "../App";

export const getCartCount = () => {
	const count = localStorage.getItem("CART_COUNT");
	return count ? parseInt(count) : 0;
};

const CartData = () => {
	const cartItem = localStorage.getItem("CART_ITEM");
	let cart: { [key: string]: CartItem } = cartItem ? JSON.parse(cartItem) : {};
	return cart;
};

export default CartData;
