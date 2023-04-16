import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ButtonIcon } from "./ButtonIcon";
import { IconType } from "react-icons";

interface ButtonType {
	linkPage?: string;
	content?: string;
	icon?: IconType;
	isDarkMode?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonItem = ({ linkPage, content, icon, isDarkMode, handleClick }: ButtonType) => {
	return (
		<Button type="button" onClick={handleClick}>
			{linkPage && content && <Link to={linkPage}>{content}</Link>}
			{linkPage && icon && (
				<Link to={linkPage}>
					<ButtonIcon iconName={icon} />
				</Link>
			)}
		</Button>
	);
};

const Button = styled.button`
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 0.7rem;

	& > a {
		text-decoration: none;

		& > svg {
			padding: 0;
			display: block;
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;

export default ButtonItem;
