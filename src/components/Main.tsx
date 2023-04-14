import styled from "@emotion/styled";
import MainCarousel from "./Carousel";

const Main = () => {
	const carouselImgs = [
		{ title: "fashion", src: "/carousel_imgs/fashion.jpeg", alt: "fashion" },
		{ title: "digital", src: "/carousel_imgs/digital.jpeg", alt: "digital" },
		{ title: "grocery", src: "/carousel_imgs/grocery.jpeg", alt: "grocery" },
	];

	return (
		<Wrapper>
			<MainCarousel images={carouselImgs}  />
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
