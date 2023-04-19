import styled from "@emotion/styled";
import GetData from "../Api";
import { useNavigate } from "react-router-dom";

interface ProductFrameProps {
	category: string;
	numberOfItems?: number;
}

const ProductFrame = (props: ProductFrameProps) => {
	const data = GetData("https://fakestoreapi.com/products");
	let categoryItems = data.filter((el) => el.category.includes(props.category));
	categoryItems = props.numberOfItems ? categoryItems.slice(0, props.numberOfItems) : categoryItems;

	const navigate = useNavigate();

	const handleClick = (id: number) => {
		navigate(`/product/${id}`);
	};

	return (
		<Container>
			{categoryItems.length > 0 ? (
				categoryItems.map((el) => (
					<ProductContainer key={el.id} onClick={() => handleClick(el.id)}>
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

const Container = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 1.5rem;
	margin-bottom: 4rem;
`;

const ProductContainer = styled.li`
	display: flex;
	flex-direction: column;
	width: 13rem;
	border-radius: 16px;
	color: inherit;
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
	height: 40%;
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
