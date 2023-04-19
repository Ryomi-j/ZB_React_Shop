import styled from "@emotion/styled";
import ButtonItem from "../components/common/Button";
import CartData from "../components/GetItem";
import { CartItems } from "../App";
import GetData from "../components/Api";
import { DataProps } from "./ProductDetailPage";
import HandleCart from "../components/HandleCart";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface CartItem {
	id: number;
	count: number;
}

interface CartPageProps {
	isDarkMode: boolean;
	setCartItem: React.Dispatch<React.SetStateAction<CartItems>>;
}

const CartPage = ({ setCartItem, isDarkMode }: CartPageProps) => {
	const cart = Object.values(CartData());
	const apiData = GetData("https://fakestoreapi.com/products");

	let cartItem: Array<DataProps> = [];
	let cartItemNum: Array<number> = [];

	for (let i = 0; i < cart.length; i++) {
		apiData.map((el) => {
			if (el.id === cart[i].id && cart[i].count > 0) {
				cartItem.push(el);
				cartItemNum.push(cart[i].count);
			}
		});
	}

	const addOrSub = (product: DataProps, operator: string) => {
		if (operator === "+") {
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
		} else {
			HandleCart(product.id, -1);
			setCartItem((prev) => {
				const count = prev.cartItem[product.id]?.count ?? 0;
				return {
					...prev,
					cartCount: prev.cartCount - 1 < 0 ? 0 : prev.cartCount - 1,
					cartItem: {
						...prev.cartItem,
						[product.id]: {
							id: product.id,
							count: count - 1,
						},
					},
				};
			});
		}
	};

	return (
		<ContainerWrapper isDarkMode={isDarkMode}>
			<Container>
				<BreadCrumble>
					<p>홈</p>
					<span>장바구니</span>
				</BreadCrumble>
				<CartItemContainerWrapper>
					{cartItem.length > 0 ? (
						<>
							{cartItem.map((el: DataProps, idx) => {
								return (
									<CartItemContainer key={el.id}>
										<ImageContainer>
											<img src={el.image} alt={el.title} />
										</ImageContainer>
										<ProductDetailContainer>
											<h2>
												<a>{el.title}</a>
											</h2>
											<p>$ {el.price * cartItemNum[idx]}</p>
											<ButtonWrapper>
												<ButtonItem icon={AiOutlineMinusCircle} handleClick={() => addOrSub(el, "-")} />
												<p>{cartItemNum[idx]}</p>
												<ButtonItem icon={AiOutlinePlusCircle} handleClick={() => addOrSub(el, "+")} />
											</ButtonWrapper>
										</ProductDetailContainer>
									</CartItemContainer>
								);
							})}
						</>
					) : (
						<EmptyCartWrapper>
							<h1>장바구니에 물품이 없습니다.</h1>
							<ButtonItem content="담으러 가기" linkPage="/" />
						</EmptyCartWrapper>
					)}
				</CartItemContainerWrapper>
					<Wrapper>
						<TotalPrice>Total: {cartItem.reduce((a, c) => a + c.price, 0)}</TotalPrice>
						<ButtonItem content="구매하기" />
					</Wrapper>
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.section<{ isDarkMode: boolean }>`
	width: 100%;
	min-height: 46rem;
	margin: 0 auto;
	padding-top: 3.5rem;
	background: ${(props) => (props.isDarkMode ? "#272d37" : "#ffffff")};
	color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};
`;

const Container = styled.div`
	max-width: 55rem;
	margin: 0 auto;
	padding: 1.8rem 2rem;
	width: 100%;

	@media screen and (max-width: 920px) {
		padding: 1.8rem 0;
	}
`;

const BreadCrumble = styled.div`
	display: flex;
	align-items: center;
	height: 1.25rem;
	margin: 0 auto;
	padding-top: 0.4rem;
	padding-bottom: 0.5rem;
	gap: 1.2rem;
	line-height: 1.25rem;
	font-size: 0.9rem;

	& p {
		line-height: 1.25rem;
		padding-top: 0.5rem;

		&::after {
			content: "";
			display: block;
			position: relative;
			top: -0.6rem;
			left: 1.2rem;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			height: 0.4rem;
			width: 0.4rem;
			border-top: 1px solid;
			border-right: 1px solid;
			transform: translate(-50%, -50%) rotate(45deg);
		}
	}
`;

const CartItemContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 3.5rem;
	width: 100%;
	color: inherit;

	@media screen and (max-width: 920px) {
		min-height: 27.5rem;

		& > div {
			flex-direction: column;
			align-items: center;
			margin: 0 auto;

			& figure {
				padding: 1rem;
				height: 13.5rem;
			}

			& div {
				padding: 0.5rem;

				& div {
					padding-left: 13rem;
				}

				& h2 {
					font-size: 1rem;
				}
			}
		}
	}
`;

const CartItemContainer = styled.div`
	display: flex;
	margin: 1rem auto;
	max-width: 58rem;
`;

const ImageContainer = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	max-width: 14rem;
	background: #ffffff;
	border-radius: 20px;

	& > img {
		max-width: 100%;
		max-height: 100%;
	}
`;

const ProductDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;

	& h2 {
		font-size: 1.3rem;
		font-weight: bold;
		line-height: 2rem;
	}

	& p {
		margin: 3rem 0 1rem;
		font-size: 1.875rem;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	padding-top: 2rem;
	padding-left: 14rem;
	width: 10rem;
	text-align: center;

	& > button {
		justify-content: center;
		font-size: 1.5rem;
		padding: 0;
		width: 5rem;

		svg {
			width: 5rem;
			color: #641ae6;
		}
	}

	& p {
		margin: auto;
	}
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding-top: 5rem;

	@media screen and (max-width: 920px) {
		flex-direction: row;
	}

	& > button {
		justify-content: center;
		background: #641ae6;
		width: 5.28rem;
		font-size: 0.9rem;
		color: #ffffff;
	}
`;
const TotalPrice = styled.p`
	font-size: 1.5rem;
`;

const EmptyCartWrapper = styled.div`
	margin: 3.8rem auto;
	& h1 {
		font-size: 1.5rem;
		margin-bottom: 2.7rem;
	}

	& a {
		text-decoration: none;

		& button {
			display: flex;
			justify-content: center;
			padding: 0.8rem;
			width: 6.3rem;
			border-radius: 10px;
			background: #570df8;
			font-size: 0.875rem;
			color: #ffffff;

			&:hover {
				background: #4506cb;
			}
		}
	}
`;

export default CartPage;
