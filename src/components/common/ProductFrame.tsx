import styled from "@emotion/styled";
import GetData from "../api";

interface ProductFrameProps {
	category: string;
	numberOfItems?: number;
}

const ProductFrame = (props: ProductFrameProps) => {
	const data = GetData("https://fakestoreapi.com/products");
	let categoryItems = data.filter((el) => el.category.includes(props.category));
	categoryItems = props.numberOfItems ? categoryItems.slice(0, props.numberOfItems) : categoryItems;

	return (
		<Container>
			{categoryItems.length > 0 ? (
				categoryItems.map((el) => (
					<ProductContainer key={el.id}>
						<ProductImgContainer>
							<img src={el.image} alt={`${el.category} image`} />
						</ProductImgContainer>
						<ProductDetail>
							<p>{el.title}</p>
							<p>{`$${el.price}`}</p>
						</ProductDetail>
					</ProductContainer>
				))
			) : (
				<p>Loading...</p>
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	margin-bottom: 4rem;
`;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 13rem;
	border: 1px solid rgb(229 231 235);
	border-radius: 16px;
	background-color: #f3f4f6;
	color: #1f2937;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		& > figure img {
			transform: scale(1.2);
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 0.3s;
		}
	}

	&:not(:hover) {
		& > figure img {
			transform: scale(1);
			transition-timing-function: ease-out;
			transition-duration: 0.3s;
		}
	}
`;

const ProductImgContainer = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20rem;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	background-color: #ffffff;

	& > img {
		max-width: 50%;
		max-height: 50%;
	}
`;

const ProductDetail = styled.div`
	display: inline-block;
	width: auto;
	min-height: 8.5rem;
	padding: 2rem;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	text-align: left;
	line-height: 1.4rem;

	& :first-of-type {
		margin-bottom: 1.5rem;
		font-weight: bold;
	}
`;

export default ProductFrame;
