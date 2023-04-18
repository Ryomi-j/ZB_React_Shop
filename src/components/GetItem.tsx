import { useEffect } from "react";

interface CartItem {
	id: number;
	count: number;
}

const CartData = () => {
	const cartItem = localStorage.getItem("CART_ITEM");
	let cart: { [key: string]: CartItem } = cartItem ? JSON.parse(cartItem) : {};
	return cart;
};

export default CartData;
