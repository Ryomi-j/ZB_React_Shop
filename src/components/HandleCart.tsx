import CartData from "./GetItem";

const HandleCart = (productId: number) => {
	let cart = CartData();

	if (cart[productId]) {
		cart[productId].count++;
	} else {
		cart[productId] = { id: productId, count: 1 };
	}

	localStorage.setItem("CART_ITEM", JSON.stringify(cart));
};

export default HandleCart;
