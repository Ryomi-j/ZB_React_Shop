import styled from "@emotion/styled";
import MainCarousel from "./Carousel";

const Main = () => {
	const carouselImgs = [
		{
			title: "fashion",
			src: "/carousel_imgs/fashion.jpeg",
			alt: "fashion",
			caption: "물빠진 청바지!",
			detail: "이제 막 도착한 패션 청바지를 구경해 보세요.",
			linkPage: "/",
		},
		{
			title: "digital",
			src: "/carousel_imgs/digital.jpeg",
			alt: "digital",
			caption: "신속한 업무처리!",
			detail: "다양한 디지털 상품을 둘러보세요.",
			linkPage: "/",
		},
		{
			title: "grocery",
			src: "/carousel_imgs/grocery.jpeg",
			alt: "grocery",
			caption: "신선한 식품!",
			detail: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
			linkPage: "/",
		},
	];

	return (
		<Wrapper>
			<MainCarousel images={carouselImgs} />
			<CategoryWrapper></CategoryWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	width: 100%;
	height: 43rem;
	& > div {
		height: 40rem;
	}
`;

const CategoryWrapper = styled.section``;

export default Main;
