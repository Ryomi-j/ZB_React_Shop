import styled from "@emotion/styled";
import ButtonItem from "./common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiSunLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import Modal from "./common/Modal";


interface HeaderProps {
	cartCount: number;
	setDarkMode: () => void;
	isDarkMode: boolean;
}

interface stateProps {
	isDarkMode: boolean;
	modalState?: boolean;
}

const Header = ({ cartCount, isDarkMode, setDarkMode }: HeaderProps) => {
	const [searchValue, setSearchValue] = useState("");
	const [modalState, setModalState] = useState(false);

	const headerCategoryButtons = ["패션", "액세서리", "디지털"];
	const categories = ["fashion", "jewelery", "electronics"];

	const handleClick = () => {
		setModalState(!modalState);
	};

	return (
		<ContainerWrapper isDarkMode={isDarkMode}>
			<Container>
				<CategoryDropdown onClick={handleClick}>
					<div></div>
					<div></div>
					<div></div>
				</CategoryDropdown>

				<Title isDarkMode={isDarkMode}>
					<Link to="/">React Shop</Link>
				</Title>
				<Category isDarkMode={isDarkMode} modalState={modalState}>
					{headerCategoryButtons.map((el, idx) => {
						return <ButtonItem key={el} linkPage={`/${categories[idx]}`} content={el}  handleClick={() => setModalState(!modalState)}/>;
					})}
				</Category>
				<ButtonWrapper isDarkMode={isDarkMode}>
					<ButtonItem icon={isDarkMode ? RiSunLine : BsMoon} handleClick={setDarkMode} />
					<div>
						<SearchBar
							placeholder="검색"
							value={searchValue}
							onChange={(e) => {
								setSearchValue(e.target.value);
							}}
						/>
						<Modal searchValue={searchValue} setSearchValue={setSearchValue} />
					</div>
					<CartBtn>
						<span>{cartCount}</span>
						<ButtonItem linkPage="/cart" icon={BsCart3} />
					</CartBtn>
				</ButtonWrapper>
			</Container>
		</ContainerWrapper>
	);
};

const ContainerWrapper = styled.header<stateProps>`
	position: relative;
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
	background: ${(props) => (props.isDarkMode ? "#191d24" : "#ffffff")};
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Container = styled.div`
	display: flex;
	max-width: 55rem;
	justify-content: space-around;
	align-items: center;
`;

const Title = styled.h1<stateProps>`
	font-weight: bold;
	font-size: 1.1rem;
	cursor: pointer;
	text-align: center;
	color: ${(props) => (props.isDarkMode ? "#ffffff" : "#374151")};

	a:hover {
		text-decoration: none;
	}
`;

const Category = styled.nav<stateProps>`
	display: flex;
	flex-shrink: 3;
	flex-grow: 2;
	align-items: center;
	justify-content: left;
	margin-left: 0.5rem;

	@media screen and (max-width: 940px) {
		display:  ${(props) => (props.modalState ? "flex" : "none")};
		align-items: center;
		position: absolute;
		flex-direction: column;
		top: 4rem;
		left: 0;
		width: 6rem;
		background: ${(props) => (props.isDarkMode ? "#374151" : "#ffffff")};
		border: ${(props) => (props.isDarkMode ? "none" : "1px solid rgb(229 231 235)")};
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;

		& > a {
			width: 100%;
			& button {
				width: 100%;
				justify-content: center;
				border-radius: 5px;
			}
		}
	}

	& > a {
		text-decoration: none;

		& > button {
			font-size: 0.9rem;
			color: ${(props) => (props.isDarkMode ? "#ffffff" : "#374151")};

			&:hover {
				background: #1f293733;
			}
		}
	}
`;

const CategoryDropdown = styled.div`
	display: none;

	@media screen and (max-width: 940px) {
		display: block;
		cursor: pointer;
		margin: auto 0;

		& div {
			margin: 0.3rem;
			width: 2rem;
			height: 0.2rem;
			background-color: #374151;
			z-index: 999;
		}
	}
`;

const ButtonWrapper = styled.div<stateProps>`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 3rem;

	& > button {
		color: ${(props) => (props.isDarkMode ? "#ffffff" : "#374151")};
		transform: ${(props) =>
			props.isDarkMode
				? "translateX(1px) rotate(45deg) translateY(1px)"
				: "translateX(1px) rotate(0deg) translateY(1px)"};
		transition-property: all;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	& input {
		background: ${(props) => (props.isDarkMode ? "#4b5563" : "#d1d5db")};
		color: ${(props) => (props.isDarkMode ? "#ffffff" : "#0e0e0e")};
	}

	& a {
		display: flex;
		height: 3rem;

		&:hover {
			background: #1f293733;
			border-radius: 0.5rem;
		}

		& button {
			color: ${(props) => (props.isDarkMode ? "#ffffff" : "#374151")};
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
