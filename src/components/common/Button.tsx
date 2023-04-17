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
		<>
			{linkPage && icon && content && (
				<Link to={linkPage}>
					<Button type="button" onClick={handleClick}>
						{content}
						<ButtonIcon iconName={icon} />
					</Button>
				</Link>
			)}
			{linkPage && content && !icon && (
				<Link to={linkPage}>
					<Button type="button" onClick={handleClick}>
						{content}
					</Button>
				</Link>
			)}
			{linkPage && icon && !content && (
				<Link to={linkPage}>
					<Button type="button" onClick={handleClick}>
						<ButtonIcon iconName={icon} />
					</Button>
				</Link>
			)}
			{!linkPage && icon && !content && (
				<Button type="button" onClick={handleClick}>
					<ButtonIcon iconName={icon} />
				</Button>
			)}
			{!linkPage && !icon && content && (
				<Button type="button" onClick={handleClick}>
					{content}
				</Button>
			)}
		</>
	);
};

const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem 0.7rem;
	font-size: 1.1rem;

	& > svg {
		padding: 0;
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}
`;

export default ButtonItem;
