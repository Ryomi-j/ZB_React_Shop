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
						<Content>
							<h2>{image.caption}</h2>
							<p>{image.detail}</p>
							<ButtonWrapper isDarkMode={isDarkMode}>
								<ButtonItem content="바로가기" linkPage={image.linkPage} icon={BsArrowRightShort} />
							</ButtonWrapper>
						</Content>
						<Img src={image.src} alt={image.alt} />
					</div>
				))}
			</StyledCarousel>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 4rem;
	max-height: calc(100vh - 4rem);
`;

const StyledCarousel = styled(Carousel)`
	position: relative;

	& > div {
		top: 30%;

		& .control-arrow {
			border-radius: 0rem;
		}
	}
`;

const Content = styled.div`
	position: absolute;
	top: 30%;
	left: 10%;
	color: #ffffff;
	font-size: 1.2rem;

	& h2 {
		margin: 1rem auto;
		font-weight: bold;
		font-size: 2.2rem;
		text-align: left;
	}

	@media screen and (max-width: 760px) {
		& h2 {
			font-size: 1.5rem;
		}

		& p {
			font-size: 0.8rem;
		}
	}
`;

const ButtonWrapper = styled.div<{ isDarkMode: boolean }>`
	margin-top: 1rem;
	text-align: left;

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

			@media screen and (max-width: 970px) {
				font-size: 0.7rem;
				height: 2rem;
			}

			@media screen and (max-width: 760px) {
				font-size: 0.5rem;

				& svg {
					width: 1rem;
				}
			}
		}
	}
`;

const Img = styled.img`
	max-height: 750px;
`;

export default MainCarousel;
