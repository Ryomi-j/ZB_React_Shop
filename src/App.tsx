import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedItem, setSelectedItem] = useState(0);
	const possibleCategories = ["home", "fashion", "jewelery", "electronics"];

	const location = useLocation();
	const [cat, item] = location.pathname.split("/").filter((x) => x !== "");
	if (cat && possibleCategories.includes(cat)) localStorage.setItem("category", cat);
	if (item) localStorage.setItem("item", item);

	useEffect(() => {
		const [cat, item] = [localStorage.getItem("category"), localStorage.getItem("item")];
		if (cat && possibleCategories.includes(cat)) setSelectedCategory(cat);
		if (item) setSelectedItem(Number(item));
	}, [cat, item]);

	return (
		<>
			<Header setCategory={setSelectedCategory} />
			<Routes>
				<Route path="/" element={<Main setCategory={setSelectedCategory} setItem={setSelectedItem} />} />
				<Route
					path={`/${selectedCategory}`}
					element={<CategoryPage category={selectedCategory} setItem={setSelectedItem} />}
				/>
				<Route path={`/product/${selectedItem}`} element={<ProductDetailPage selectedItem={selectedItem} />} />
				<Route
					path={`/${selectedCategory}`}
					element={<Navigate replace to={`/${selectedCategory}`}></Navigate>}
				></Route>
				<Route
					path={`/product/${selectedItem}`}
					element={<Navigate replace to={`/product/${selectedItem}`}></Navigate>}
				></Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
