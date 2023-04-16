import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("home");

	return (
		<>
			<Header setCategory={setSelectedCategory} />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path={`/${selectedCategory}`} element={<CategoryPage category={selectedCategory} />} />
			</Routes>
			
			<Footer />
		</>
	);
}

export default App;
