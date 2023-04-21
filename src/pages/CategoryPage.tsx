import styled from "@emotion/styled";
import ProductFrame from "../components/common/ProductFrame";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const CategoryPage = ({ isDarkMode }: { isDarkMode: boolean }) => {
	const { category } = useParams();
	const categoryTitle = ["패션", "액세서리", "디지털"];
	const dataCategory = ["fashion", "jewelery", "electronics"];
	const categories = ["clothing", "jewelery", "electronics"];

	const categoryIdx = dataCategory.findIndex((el) => el === category);

	return (
		<>
			{categoryIdx === -1 ? (
				<NotFound isDarkMode={isDarkMode}/>
			) : (
				<ContainerWrapper isDarkMode={isDarkMode}>
					<Container>
						<BreadCrumble>
							<p>홈</p>
							<span>{categoryTitle[categoryIdx]}</span>
						</BreadCrumble>
						<Category>{categoryTitle[categoryIdx]}</Category>
						<ProductWrapper>
							<ProductFrame category={categories[categoryIdx]} />
						</ProductWrapper>
					</Container>
				</ContainerWrapper>
			)}
		</>
	);
};

const ContainerWrapper = styled.section<{ isDarkMode: boolean }>`
	width: 100%;
	margin: 0 auto;
	padding-top: 4rem;
	background: ${(props) => (props.isDarkMode ? "#272d37" : "#ffffff")};
	color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};

	& div div ul {
		
		& > li {
			border: ${(props) => (props.isDarkMode ? "none" : "1px solid rgb(229 231 235)")};
			background: ${(props) => (props.isDarkMode ? "#374151" : "#f3f4f6")};
			 div {
				color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};
			}
		}
		
	}
`;

const Container = styled.div`
	margin: 0 auto;
	padding: 1.8rem 2rem;
	max-width: 57rem;
	min-height: 48.9rem;
`;

const BreadCrumble = styled.ul`
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
	margin-top: 0.4rem;
	margin-bottom: 2.2rem;
	font-size: 2.2rem;
	font-weight: bold;
	color: inherit;
	text-align: center;
`;

const ProductWrapper = styled.div`<{ isDarkMode: boolean }>
	width: 60rem;
	margin: 0 auto;

	& > ul li div {
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;

	}
`;

export default CategoryPage;
