interface CartItem {
	id: number;
	count: number;
}

const HandleCart = (productId: number) => {
	const cartItem = localStorage.getItem("CART_ITEM");
	let cart: { [key: string]: CartItem } = cartItem ? JSON.parse(cartItem) : {};

	if (cart[productId]) {
		cart[productId].count++;
	} else {
		cart[productId] = { id: productId, count: 1 };
	}

	localStorage.setItem("CART_ITEM", JSON.stringify(cart));
};

export default HandleCart;
