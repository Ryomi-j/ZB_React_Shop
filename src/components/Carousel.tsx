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
	isDarkMode: boolean;
}

const MainCarousel = ({ images, isDarkMode }: MainCarouselProps) => {
	return (
		<Wrapper>
			<StyledCarousel autoPlay={false} showThumbs={false} showStatus={false} infiniteLoop={true}>
				{images.map((image) => (
					<div key={image.title}>
						<Caption>{image.caption}</Caption>
						<Detail>{image.detail}</Detail>
						<ButtonWrapper isDarkMode={isDarkMode}>
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
	top: 3.2rem;
	height: 720px;
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
	top: 9rem;
	max-width: 55rem;
	margin: 0 auto;
	color: #ffffff;
	font-weight: bold;
	font-size: 2.2rem;
	text-align: left;
	z-index: 5;
`;

const Detail = styled.p`
	position: relative;
	top: 10rem;
	margin: 0 auto;
	max-width: 55rem;
	color: white;
	text-align: left;
	z-index: 2;
`;

const ButtonWrapper = styled.div<{ isDarkMode: boolean }>`
	position: relative;
	top: 11.5rem;
	margin: 0 auto;
	max-width: 55rem;
	color: white;
	text-align: left;
	z-index: 2;

	& > a {
		text-decoration: none;
		display: inline-block;

		& button {
			display: flex;
			align-items: center;
			justify-content: center;
			background: ${(props) => (props.isDarkMode ? "#191d24" : "#3d4451")};
			color: #ffffff;
			padding: 0 0.7rem;
			height: 3rem;
			font-size: 1rem;
			opacity: 1;

			&:hover {
				background: ${(props) => (props.isDarkMode ? "#111318" : "#303640")};
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
