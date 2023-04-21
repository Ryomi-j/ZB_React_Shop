import styled from "@emotion/styled";

interface BreadCrumbleItemProps {
	firstCategory: string ;
	secondCategory: string;
}

export const BreadCrumbleItem = ({ firstCategory, secondCategory }: BreadCrumbleItemProps) => {
	return (
		<BreadCrumble>
			<p>{firstCategory}</p>
			<Arrow></Arrow>
			<span>{secondCategory}</span>
		</BreadCrumble>
	);
};

const BreadCrumble = styled.ul`
	display: flex;
	align-items: center;
	width: 60rem;
	height: 1.25rem;
	margin: 0 auto;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	line-height: 1.25rem;
	font-size: 0.9rem;
	line-height: 1.25rem;
`;

const Arrow = styled.span`
	&::after {
		content: "";
		display: block;
		position: relative;
		top: 0.25rem;
		left: 0.1rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		height: 0.4rem;
		width: 0.4rem;
		border-top: 1px solid;
		border-right: 1px solid;
		transform: translate(-50%, -50%) rotate(45deg);
	}
`;
