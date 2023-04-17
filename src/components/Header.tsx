import styled from "@emotion/styled";
import ButtonItem from "./common/Button";
import { RiSunLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

interface HeaderProps {
	setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setCategory }: HeaderProps) => {
	const headerCategoryButtons = ["패션", "액세서리", "디지털"];
	const categories = ["fashion", "jewelery", "electronics"];

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const target = event.target as HTMLButtonElement;

		if (target.tagName === "BUTTON" || target.tagName === "A") {
			const text = target.innerText;
			const selectedCategory = categories[headerCategoryButtons.findIndex((category) => category === text)];

			if (selectedCategory !== undefined) {
				setCategory(selectedCategory);
			}
		}
	};

	return (
		<ContainerWrapper>
			<Container>
				<Title>
					<Link to="/">React Shop</Link>
				</Title>
				<Category onClick={handleClick}>
					{headerCategoryButtons.map((el, idx) => {
						return <ButtonItem key={el} linkPage={`/${categories[idx]}`} content={el} />;
					})}
				</Category>
				<Buttons>
					<ButtonItem icon={RiSunLine} isDarkMode />
					<SearchBar placeholder="검색" />
					<ButtonItem linkPage="/" icon={MdOutlineShoppingBag} />
				</Buttons>
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 3rem;
	min-height: 3rem;
	margin: auto;
	padding: 0.5rem;
	background: #ffffff;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	color: #374151;
`;

const Container = styled.div`
	width: 58rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Title = styled.h1`
	width: 7rem;
	font-weight: bold;
	font-size: 1.1rem;
	cursor: pointer;
	text-align: center;

	a:hover {
		text-decoration: none;
	}
`;

const Category = styled.nav`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 30rem;

	& > a {
		text-decoration: none;

		& > button {
			font-size: 0.9rem;
			color: #374151;

			&:hover {
				background: #1f293733;
			}
		}
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 20rem;
	height: 3rem;
	background-color: red

	&:last-child {		
		&:hover {
			background: #1f293733;
		}
	}
`;

const SearchBar = styled.input`
	display: block;
	width: 10rem;
	height: 3rem;
	padding: 0 1.5rem;
	outline: none;
	opacity: 0.5;
	border: none;
	border-radius: 0.5rem;
	background-color: rgba(31, 41, 55, 0.3);
`;

export default Header;
