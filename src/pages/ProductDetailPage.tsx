import styled from "@emotion/styled";
import GetData from "../components/api";
import ButtonItem from "../components/common/Button";

interface ProductDetailPageProps {
	selectedItem: number;
}
interface DataProps {
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

const ProductDetailPage = (props: ProductDetailPageProps) => {
	const categories = ["clothing", "jewelery", "electronics"];
	const categoryTitle = ["패션", "액세서리", "디지털"];

	const item = GetData("https://fakestoreapi.com/products").find((el) => el.id === props.selectedItem);

	const categoryIdx = categories.findIndex((el) => item?.category.includes(el));

	return (
		<ContainerWrapper>
			<Container>
				{item ? (
					<>
						<BreadCrumble>
							<p>{categoryTitle[categoryIdx]}</p>
							<span>{item.title}</span>
						</BreadCrumble>
						<DetailContainer>
							<ImageContainer>
								<img src={item.image} alt={`${item.category} image`} />
							</ImageContainer>
							<Details>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<Rate>
									{" "}
									{item.rating.rate} / {item.rating.count} 참여
								</Rate>
								<Price>{`$${item.price}`}</Price>
								<ButtonWrapper>
									<ButtonItem content="장바구니에 담기" />
									<ButtonItem content="장바구니로 이동" linkPage="/" />
								</ButtonWrapper>
							</Details>
						</DetailContainer>
					</>
				) : (
					<p>Loading...</p>
				)}
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.section`
	width: 100%;
	height: 45.7rem;
	margin: 0 auto;
	padding-top: 4rem;
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

const DetailContainer = styled.div`
	display: flex;
	margin-top: 3.5rem;
	width: 56rem;
	height: 23rem;
	color: #1f2947;
	letter-spacing: 0.02rem;
`;

const ImageContainer = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;

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
	}

	& a {
		text-decoration: none;
		& button {
			border: 1px solid currentColor;
			background: #ffffff;
			color: #1f2947;
		}
	}
`;
export default ProductDetailPage;
