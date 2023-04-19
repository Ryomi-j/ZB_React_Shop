import styled from "@emotion/styled";
import GetData from "../components/Api";
import ButtonItem from "../components/common/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HandleCart from "../components/HandleCart";
import { CartItems } from "../App";
import NotFound from "./NotFound";

export interface DataProps {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

const initialDataProps = {
	id: 0,
	title: "",
	price: 0,
	description: "",
	category: "",
	image: "",
	rating: {
		rate: 0,
		count: 0,
	},
};

interface ProductDetailPageProps {
	setCartItem: React.Dispatch<React.SetStateAction<CartItems>>;
	isDarkMode: boolean;
}

const ProductDetailPage = ({ setCartItem, isDarkMode }: ProductDetailPageProps) => {
	const { productId } = useParams();
	const [product, setProduct] = useState<DataProps>(initialDataProps);

	const categories = ["clothing", "jewelery", "electronics"];
	const categoryTitle = ["패션", "액세서리", "디지털"];

	const item = GetData("https://fakestoreapi.com/products").find((el) => el.id === Number(productId));

	useEffect(() => {
		setProduct(item ?? initialDataProps);
	}, [item]);

	const handleCartData = (product: DataProps) => {
		HandleCart(product.id, 1);
		setCartItem((prev) => {
			const count = prev.cartItem[product.id]?.count ?? 0;
			return {
				...prev,
				cartCount: prev.cartCount + 1,
				cartItem: {
					...prev.cartItem,
					[product.id]: {
						id: product.id,
						count: count + 1,
					},
				},
			};
		});
	};

	const categoryIdx = categories.findIndex((el) => product?.category.includes(el));

	return (
		<ContainerWrapper isDarkMode={isDarkMode}>
			<Container>
				{Number(product.id) > 0 ? (
					<>
						<BreadCrumble>
							<p>{categoryTitle[categoryIdx]}</p>
							<Arrow></Arrow>
							<span>{product.title}</span>
						</BreadCrumble>
						<DetailContainer>
							<ImageContainer>
								<img src={product.image} alt={`${product.category} image`} />
							</ImageContainer>
							<Details>
								<h2>{product.title}</h2>
								<p>{product.description}</p>
								<Rate>
									{product.rating.rate} / {product.rating.count} 참여
								</Rate>
								<Price>{`$${product.price}`}</Price>
								<ButtonWrapper>
									<ButtonItem content="장바구니에 담기" handleClick={() => handleCartData(product)} />
									<ButtonItem content="장바구니로 이동" linkPage="/cart" />
								</ButtonWrapper>
							</Details>
						</DetailContainer>
					</>
				) : Number(product.id) === 0 ? (
					<NotFound isDarkMode={isDarkMode}/>
				) : (
					<LoadingBox>Loading...</LoadingBox>
				)}
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.section<{ isDarkMode: boolean }>`
	width: 100%;
	height: 45.7rem;
	margin: 0 auto;
	padding-top: 4rem;
	background-color: ${(props) => (props.isDarkMode ? "#272d37" : "#ffffff")};
	color: ${(props) => (props.isDarkMode ? "#a6adba" : " #1f2947")};
`;

const Container = styled.div`
	width: 56rem;
	margin: 0 auto;
	padding: 1.2rem 2rem 2rem;
`;

const BreadCrumble = styled.div`
	display: flex;
	align-items: center;
	width: 50rem;
	height: 1.25rem;
	margin: 0 auto;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	line-height: 1.25rem;
	font-size: 0.9rem;

	& p {
		line-height: 1.25rem;
	}
`;

const Arrow = styled.span`
	&::after {
		content: "";
		display: block;
		position: relative;
		top: 0.25rem;
		left: 0rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		height: 0.4rem;
		width: 0.4rem;
		border-top: 1px solid;
		border-right: 1px solid;
		transform: translate(-50%, -50%) rotate(45deg);
	}
`;

const DetailContainer = styled.div`
	display: flex;
	margin-top: 3.5rem;
	width: 56rem;
	height: 23rem;
	color: inherit;
	letter-spacing: 0.02rem;
`;

const ImageContainer = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	background: #ffffff;
	border-radius: 20px;

	& img {
		object-fit: contain;
		height: 18rem;
		width: 18rem;
	}
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 2rem 3rem;
	width: 35.5rem;

	& h2 {
		font-size: 1.25rem;
		font-weight: bold;
		line-height: 1.8rem;
	}

	& p {
		line-height: 1.5rem;
	}
`;

const Rate = styled.p`
	margin-top: 0.75rem;
`;

const Price = styled.p`
	margin: 1.2rem 0 1rem;
	font-size: 1.875rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 1rem;

	& button {
		display: flex;
		padding: 0.8rem;
		border-radius: 10px;
		font-size: 0.875rem;
		background: #570df8;
		color: #ffffff;

		&:hover {
			background: #4506cb;
		}
	}

	& a {
		text-decoration: none;
		& button {
			border: 1px solid currentColor;
			background: #ffffff;
			color: #1f2947;

			&:hover {
				background: #1f2937;
				color: #ffffff;
			}
		}
	}
`;

const LoadingBox = styled.div`
	padding-top: 15rem;
	width: 56rem;
	height: 20rem;
	text-align: center;
	font-size: 3rem;
`;
export default ProductDetailPage;
