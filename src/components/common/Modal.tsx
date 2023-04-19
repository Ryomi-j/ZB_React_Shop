import { Link } from "react-router-dom";
import GetData from "../Api";
import styled from "@emotion/styled";
import { useState } from "react";

interface ModalProps {
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	searchValue: string;
}

const Modal = ({ searchValue, setSearchValue }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
	const data = GetData("https://fakestoreapi.com/products");
	const value = searchValue.toLowerCase();
	const filteredData = data.filter((el) => el.title.toLowerCase().includes(value));
	const maxLength = 40;

	return (
		<Container searchValue={searchValue}>
			{filteredData.map((el) => {
				return (
					<Item key={el.id} onClick={() => setSearchValue("")}>
						<Link to={`/product/${el.id}`}>
							{el.title.length > maxLength ? el.title.slice(0, maxLength - 3) + "..." : el.title}
						</Link>
					</Item>
				);
			})}
		</Container>
	);
};

const Container = styled.ul<{ searchValue: string }>`
	visibility: ${(props) => (props.searchValue.length > 0 ? "visible" : "hidden")};
	position: absolute;
	top: 4rem;
	padding: 0.5rem;
	width: 12rem;
	height: 20rem;
	background: #4b5563;
	overflow: auto;
	box-sizing: content-box;
	border-radius: 10px;
`;

const Item = styled.li`
	text-overflow: ellipsis;
	padding: 0.2rem;
	&:hover {
		background: #1f293733;
	}

	& a {
		display: inline-block;
		width: 100%;
		&:hover {
			text-decoration: none;
		}
	}
`;

export default Modal;
