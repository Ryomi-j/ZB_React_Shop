import styled from "@emotion/styled";
import MainCarousel from "../components/Carousel";
import ProductFrame from "../components/common/ProductFrame";

const Main = ({ isDarkMode }: { isDarkMode: boolean }) => {
	const carouselItems = [
		{
			title: "fashion",
			src: "/carousel_imgs/fashion.jpeg",
			alt: "fashion",
			caption: "물빠진 청바지!",
			detail: "이제 막 도착한 패션 청바지를 구경해 보세요.",
			linkPage: "/fashion",
		},
		{
			title: "electronics",
			src: "/carousel_imgs/digital.jpeg",
			alt: "digital",
			caption: "신속한 업무처리!",
			detail: "다양한 디지털 상품을 둘러보세요.",
			linkPage: "/electronics",
		},
		{
			title: "grocery",
			src: "/carousel_imgs/grocery.jpeg",
			alt: "grocery",
			caption: "신선한 식품!",
			detail: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
			linkPage: "/grocery",
		},
	];

	return (
		<Wrapper isDarkMode={isDarkMode}>
			<MainCarousel images={carouselItems} isDarkMode={isDarkMode} />
			<CategoryWrapper isDarkMode={isDarkMode}>
				<Category>패션</Category>
				<ProductFrame category="clothing" numberOfItems={4} />
				<Category>액세서리</Category>
				<ProductFrame category="jewelery" numberOfItems={4} />
				<Category>디지털</Category>
				<ProductFrame category="electronics" numberOfItems={4} />
			</CategoryWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.main<{ isDarkMode: boolean }>`
	position: relative;
	width: 100%;
	min-height: calc(100vh - 11.5px);
	background: ${(props) => (props.isDarkMode ? "#272d37" : "#ffffff")};
	color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};
`;

const CategoryWrapper = styled.section<{ isDarkMode: boolean }>`
	margin: 0 auto;
	padding: 9rem 0;
	max-width: 57rem;

	& ul {
		& > li {
			border: ${(props) => (props.isDarkMode ? "none" : "1px solid rgb(229 231 235)")};

			& > div {
				background: ${(props) => (props.isDarkMode ? "#374151" : "#f3f4f6")};
				color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};
			}
		}
	}
`;

const Category = styled.h2`
	margin-bottom: 2rem;
	font-size: 2.2rem;
	font-weight: bold;
	color: inherit;
	text-align: center;
`;

export default Main;
