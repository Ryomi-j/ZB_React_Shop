import CartData, { getCartCount } from "./GetItem";

const HandleCount = (addOrSub: number) => {
	const count = getCartCount();
	localStorage.setItem("CART_COUNT", `${count + addOrSub < 0 ? 0 : count + addOrSub}`);
};

const HandleCart = (productId: number, addOrSub: number) => {
	let cart = CartData();

	if (cart[productId] === undefined) {
		cart[productId] = { id: productId, count: 1 };
	} else {
		cart[productId].count += cart[productId].count + addOrSub < 0 ? 0 : addOrSub;
	}

	localStorage.setItem("CART_ITEM", JSON.stringify(cart));
	HandleCount(addOrSub);
};

export default HandleCart;
