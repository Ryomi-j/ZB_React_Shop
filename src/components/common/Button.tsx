import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ButtonIcon } from "./ButtonIcon";
import { IconType } from "react-icons";

interface ButtonType {
	linkPage?: string;
	content?: string;
	icon?: IconType;
	isDarkMode?: boolean;
}

const ButtonItem = ({ linkPage, content, icon, isDarkMode }: ButtonType) => {
	return (
		<Button type="button">
			{content}
			{icon && <ButtonIcon iconName={icon} />}
			{linkPage && <Link to={linkPage}></Link>}
		</Button>
	);
};

const Button = styled.button`
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 0.7rem;

	& > svg {
		padding: 0;
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}
`;

export default ButtonItem;
