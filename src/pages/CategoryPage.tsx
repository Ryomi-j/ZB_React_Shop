import styled from "@emotion/styled";
import ProductFrame from "../components/common/ProductFrame";



const CategoryPage = () => {
	const categoryTitle = ["패션", "액세서리", "디지털"];
	const dataCategory = ["fashion", "jewelery", "electronics"];
	const categories = ["clothing", "jewelery", "electronics"];

	// const categoryIdx = dataCategory.findIndex((el) => el === props.category);

	return (
		<ContainerWrapper>
			<Container>
				<BreadCrumble>
					<p>홈</p>
					{/* <span>{categoryTitle[categoryIdx]}</span> */}
				</BreadCrumble>
				{/* <Category>{categoryTitle[categoryIdx]}</Category> */}
				<ProductWrapper>
					{/* <ProductFrame category={categories[categoryIdx]}/> */}
				</ProductWrapper>
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.section`
	width: 100%;
	margin: 0 auto;
	padding-top: 4rem;
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

const Category = styled.h2`
	margin-top: 1.8rem;
	margin-bottom: 2.2rem;
	font-size: 2.2rem;
	font-weight: bold;
	color: #1f2937;
	text-align: center;
`;

const ProductWrapper = styled.div`
	width: 60rem;
	margin: 0 auto;
	& div {
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export default CategoryPage;
