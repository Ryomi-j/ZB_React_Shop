import { IconType } from "react-icons";

interface ButtonIconProps {
	iconName: IconType;
}

export const ButtonIcon = ({ iconName }: ButtonIconProps) => {
	const Icon = iconName;
	return (
			<Icon/>
	);
};