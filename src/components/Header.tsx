import styled from "@emotion/styled";
import ButtonItem from "./common/Button";
import { RiSunLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
	const headerButtons = ["패션", "액세서리", "디지털"];
	return (
		<Container>
			<LeftContainer>
				<Title>
					<Link to="/">React Shop</Link>
				</Title>
				{headerButtons.map((el) => {
					return <ButtonItem key={el} linkPage="/" content={el} />;
				})}
			</LeftContainer>
			<RightContainer>
				<ButtonItem linkPage="/" icon={RiSunLine} isDarkMode />
				<SearchBar placeholder="검색" />
				<ButtonItem linkPage="/" icon={MdOutlineShoppingBag} />
			</RightContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	margin: 0 auto;
	padding: 0.5rem 2rem;
	width: 100%;
	height: 3rem;
	min-height: 3rem;
	// z-index: 999;
	background-color: #ffffff
`;

const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Title = styled.h1`
	font-weight: bold;
	font-size: 1.5rem;
	cursor: pointer;

	a:hover {
		text-decoration: none;
	}
`;

const RightContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 20rem;
	height: 3rem;
`;

const SearchBar = styled.input`
	display: block;
	width: 10rem;
	hegith: 2rem;
	padding: 0 1.5rem;
	border-radius: 0.5rem;
	outline: none;
	opacity: 0.5;
	border: none;
	background-color: rgba(31, 41, 55, 0.3);
`;

export default Header;
