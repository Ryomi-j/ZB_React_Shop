import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";
import CartData, { getCartCount } from "./components/GetItem";
import { useDarkMode } from "usehooks-ts";

export interface CartItem {
	id: number;
	count: number;
}

export interface CartItems {
	cartCount: number;
	cartItem: {
		[id: number]: CartItem;
	};
}

function App() {
	const [cartItem, setCartItem] = useState<CartItems>({ cartCount: 0, cartItem: {} });
	const [isFirstRender, setIsFirstRender] = useState(true);
	const { isDarkMode, toggle } = useDarkMode();

	useEffect(() => {
		if (isFirstRender) {
			const cart = CartData();
			const count = getCartCount();
			setIsFirstRender(false);
			setCartItem((prev) => {
				return {
					...prev,
					cartCount: count,
					cartItem: cart,
				};
			});
		}
	}, [cartItem]);

	return (
		<>
			<Header cartCount={cartItem.cartCount} setDarkMode={toggle} isDarkMode={isDarkMode} />
			<Routes>
				<Route path="/" element={<Main isDarkMode={isDarkMode} />} />
				<Route path={`:category`} element={<CategoryPage isDarkMode={isDarkMode} />} />
				<Route
					path={`product/:productId`}
					element={<ProductDetailPage setCartItem={setCartItem} isDarkMode={isDarkMode} />}
				/>
				<Route path="cart" element={<CartPage setCartItem={setCartItem} isDarkMode={isDarkMode}/>} />
				<Route path="*" element={<NotFound isDarkMode={isDarkMode}/>} />
			</Routes>
			<Footer isDarkMode={isDarkMode}/>
		</>
	);
}

export default App;
