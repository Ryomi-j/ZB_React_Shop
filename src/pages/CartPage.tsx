import styled from "@emotion/styled";
import ButtonItem from "../components/common/Button";

const CartPage = () => {
	return (
		<ContainerWrapper>
			<Container>
				<BreadCrumble>
					<p>홈</p>
					<span>장바구니</span>
				</BreadCrumble>
				<EmptyCartWrapper>
					<h1>장바구니에 물품이 없습니다.</h1>
					<ButtonItem content="담으러 가기" linkPage="/" />
				</EmptyCartWrapper>

				<ButtonItem content="구매하기" />
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
