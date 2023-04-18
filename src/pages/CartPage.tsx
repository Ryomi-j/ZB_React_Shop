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

const CartPage = ({ setCartItem }: { setCartItem: React.Dispatch<React.SetStateAction<CartItems>> }) => {
	const cart = Object.values(CartData());
	const apiData = GetData("https://fakestoreapi.com/products");

	let cartItem: Array<DataProps> = [];
	for (let i = 0; i < cart.length; i++) {
		apiData.map((el, idx) => {
			if (el.id === cart[i].id) {
				cartItem.push(el);
			}
		});
	}
	console.log(cart);

	const addOrSub = (product: DataProps, operator: string) => {
		HandleCart(product.id, 1);
		if (operator === "+") {
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
		}

		if (operator === "-") {
			HandleCart(product.id, -1);
			setCartItem((prev) => {
				const count = prev.cartItem[product.id]?.count ?? 0;
				return {
					...prev,
					cartCount: prev.cartCount - 1,
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
		<ContainerWrapper>
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
											<p>{el.price}</p>
											<ButtonWrapper>
												<ButtonItem icon={AiOutlineMinusCircle} handleClick={() => addOrSub(el, "-")} />
												<p>{cart[idx].count}</p>
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
					<ButtonItem content="구매하기" />
				</CartItemContainerWrapper>
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.section`
	width: 100%;
	margin: 0 auto;
	padding-top: 3.5rem;
	color: #1f2937;
`;

const Container = styled.div`
	width: 43rem;
	margin: 0 auto;
	padding: 1.8rem 2rem;
	width: 100%;
`;

const BreadCrumble = styled.div`
	display: flex;
	align-items: center;
	width: 60rem;
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
	padding-top: 3.5rem;
	width: 100%
	color: #1f2937;
`;

const CartItemContainer = styled.div`
	display: flex;
	margin: 1rem auto;
	width: 60rem;
	height: 15.5rem;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 14rem;

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
	padding-top: 1rem;
	margin-left: 24rem;
	width: 10rem;
	text-align: center;

	& > button {
		justify-content: center;
		font-size: 1.5rem;
		padding: 0;
		width: 5rem;

		svg {
			width: 5rem;
		}
	}

	& p {
		margin: auto;
	}
`;

const EmptyCartWrapper = styled.div`
	width: 60.5rem;
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
