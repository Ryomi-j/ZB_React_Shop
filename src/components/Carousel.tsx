import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Image {
	title: string;
	src: string;
	alt: string;
}

interface MainCarouselProps {
	images: Image[];
}

const MainCarousel = ({ images }: MainCarouselProps) => {
	return (
		<Wrapper>
			<StyledCarousel showThumbs={false} showStatus={false} infiniteLoop={true}>
				{images.map((image) => (
					<div key={image.title}>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</StyledCarousel>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	height: 30rem;
`;

const StyledCarousel = styled(Carousel)`
	& > div {
		height: 30rem;
	}
`;

export default MainCarousel;
