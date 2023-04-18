import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path={`/:category`} element={<CategoryPage />} />
				<Route path={`/product/:productId`} element={<ProductDetailPage />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
