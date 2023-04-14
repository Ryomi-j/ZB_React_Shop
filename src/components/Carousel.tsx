import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonItem from "./common/Button";
import { BsArrowRightShort } from "react-icons/bs";

interface Image {
	title: string;
	src: string;
	alt: string;
	caption: string;
	detail: string;
	linkPage: string;
}

interface MainCarouselProps {
	images: Image[];
}

const MainCarousel = ({ images }: MainCarouselProps) => {
	return (
		<Wrapper>
			<StyledCarousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
				{images.map((image) => (
					<div key={image.title}>
						<Caption>{image.caption}</Caption>
						<Detail>{image.detail}</Detail>
						<ButtonWrapper>
							<ButtonItem content="바로가기 " linkPage={image.linkPage} icon={BsArrowRightShort} />
						</ButtonWrapper>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</StyledCarousel>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: absolute;
    top: -2rem;
	width: 100%;
	height: 35rem;
	overflow: hidden;
`;

const StyledCarousel = styled(Carousel)`
	& > div {
		height: 35rem;
	}
`;

const Caption = styled.h2`
	position: relative;
	top: 15rem;
	left: 6rem;
	color: white;
	font-weight: bold;
	font-size: 2.2rem;
	text-align: left;
`;

const Detail = styled.p`
	position: relative;
	text-align: left;
	top: 16rem;
	left: 6rem;
	color: white;
`;

const ButtonWrapper = styled.div`
	position: relative;
	text-align: left;
	top: 18rem;
	left: 6rem;
	color: white;

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3d4451;
        color: #ffffff;
        padding: 0 .7rem;
        height: 3rem;
        font-size: 1.2rem;
        opacity: 1
    }
`;

export default MainCarousel;
