import styled from "@emotion/styled";
import ButtonItem from "./common/Button";
import { RiSunLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
	const headerButtons = ["패션", "액세서리", "디지털"];
	return (
		<Container>
			<LeftContainer>
				<Title>React Shop</Title>
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
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
    height: 4rem
	min-height: 4rem;
	background-color: gray;
`;

const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Title = styled.h1`
	font-weight: bold;
	font-size: 1.5rem;
`;

const RightContainer = styled.div`
	display: flex;
    justify-content: space-around;
	width: 24rem;
	height: 3rem;
`;

const SearchBar = styled.input`
	display: block;
	width: 12rem;
    hegith: 2rem;
	padding: 0 1.5rem;
	border-radius: 0.5rem;
	outline: none;
	font-size: 1.2rem;
	opacity: 0.5;
	border: none;
`;

export default Header;
