import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ButtonIcon } from "./ButtonIcon";
import { IconType } from "react-icons";

interface ButtonType {
	linkPage: string;
	content?: string;
	icon?: IconType;
	isDarkMode?: boolean;
}

const ButtonItem = ({ linkPage, content, icon, isDarkMode }: ButtonType) => {
	return (
		<Button type="button">
			{content}
			{icon && <ButtonIcon iconName={icon} />}
			<Link to={linkPage}></Link>
		</Button>
	);
};

const Button = styled.button`
    font-size: 1.1rem;

	& > svg {
		padding: 0;
		display: block;
		width: 2rem;
		height: 2rem;
		color: white;
	}
`;

export default ButtonItem;
