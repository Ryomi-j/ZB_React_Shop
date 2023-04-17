import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Route, Routes, Navigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("home");
	const [selectedItem, setSelectedItem] = useState(0);

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
				<Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
