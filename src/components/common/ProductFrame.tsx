import styled from "@emotion/styled";
import GetData from "../api";

interface ProductFrameProps {
	category: string;
	numberOfItems: number;
}

const ProductFrame = (props: ProductFrameProps) => {
	const data = GetData("https://fakestoreapi.com/products");
	let categoryItems = data.filter((el) => el.category.includes(props.category)).slice(0, props.numberOfItems)
	console.log(categoryItems);

	return (
		<>
			{categoryItems.length > 0 ? (
				categoryItems.map((el) => (
					<ProductContainer key={el.id}>
						<ProductImgContainer>
							<img src={el.image} alt={`${el.category} image`} />
						</ProductImgContainer>
						<ProductDetail>
							<p>{el.description}</p>
							<p>{el.price}</p>
						</ProductDetail>
					</ProductContainer>
				))
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

const ProductContainer = styled.div``;
const ProductImgContainer = styled.figure``;
const ProductDetail = styled.div``;

export default ProductFrame;
