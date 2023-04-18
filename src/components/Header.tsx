import styled from "@emotion/styled";
import ButtonItem from "./common/Button";
import { RiSunLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ cartCount }: { cartCount: number }) => {
	const [searchValue, setSearchValue] = useState("");
	const headerCategoryButtons = ["패션", "액세서리", "디지털"];
	const categories = ["fashion", "jewelery", "electronics"];

	return (
		<ContainerWrapper>
			<Container>
				<Title>
					<Link to="/">React Shop</Link>
				</Title>
				<Category>
					{headerCategoryButtons.map((el, idx) => {
						return <ButtonItem key={el} linkPage={`/${categories[idx]}`} content={el} />;
					})}
				</Category>
				<Buttons>
					<ButtonItem icon={RiSunLine} isDarkMode />
					<SearchBar placeholder="검색" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
					<CartBtn>
						<span>{cartCount}</span>
						<ButtonItem linkPage="/cart" icon={BsCart3} />
					</CartBtn>
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

	& a {
		display: flex;
		width: 3rem;
		height: 3rem;

		&:hover {
			background: #1f293733;
			border-radius: 0.5rem;
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

const CartBtn = styled.div`
	position: relative;
	color: #e5e7eb;

	&::before {
		content: "";
		display: block;
		position: absolute;
		top: 0.2rem;
		left: 1.8rem;
		background: #ef4444;
		height: 1.2rem;
		width: 1.5rem;
		border-radius: 9999px;
	}

	& span {
		position: absolute;
		top: 0.35rem;
		left: 2.2rem;
		font-size: 0.8rem;
	}

	& button svg {
		position: relative;
		top: 0.3rem;
		width: 1.5rem;
	}
`;

export default Header;
