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
	const handleClick = (image:Image) => {
		
	}

	return (
		<Wrapper>
			<StyledCarousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
				{images.map((image) => (
					<div key={image.title}>
						<Caption>{image.caption}</Caption>
						<Detail>{image.detail}</Detail>
						<ButtonWrapper onClick={() => handleClick(image)}>
							<ButtonItem content="바로가기" linkPage={image.linkPage} icon={BsArrowRightShort} />
						</ButtonWrapper>
						<Img src={image.src} alt={image.alt} />
					</div>
				))}
			</StyledCarousel>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	top: 3rem;
	height: 30rem;
	overflow: hidden;
`;

const StyledCarousel = styled(Carousel)`
	height: 100%;
	& > div {
		height: 100%;

		& .control-arrow {
			border-radius: 0rem;
		}
	}
`;

const Caption = styled.h2`
	position: relative;
	top: 9.2rem;
	left: 6rem;
	color: white;
	font-weight: bold;
	font-size: 2.2rem;
	text-align: left;
	z-index: 2;
`;

const Detail = styled.p`
	position: relative;
	text-align: left;
	top: 10rem;
	left: 6rem;
	color: white;
	z-index: 2;
`;

const ButtonWrapper = styled.div`
	position: relative;
	text-align: left;
	top: 11.5rem;
	left: 6rem;
	color: white;
	z-index: 2;

	& > a {
		text-decoration: none;
		display: inline-block;
		
		& button {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #3d4451;
			color: #ffffff;
			padding: 0 0.7rem;
			height: 3rem;
			font-size: 1rem;
			opacity: 1;
	
			&:hover {
				background:  #303640;
			}
		}
	}
`;

const Img = styled.img`
	object-fit: cover;
	position: relative;
	top: -12rem;
`;

export default MainCarousel;
