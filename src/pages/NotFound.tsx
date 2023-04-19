import styled from "@emotion/styled";
import ButtonItem from "../components/common/Button";

const NotFound = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<Container isDarkMode={isDarkMode}>
			<h1>404</h1>
			<p>페이지를 찾을 수 없습니다.</p>
			<ButtonItem linkPage="/" content="메인으로" />
		</Container>
	);
};

const Container = styled.section<{ isDarkMode: boolean }>`
	height: 45.7rem;
	text-align: center;
	background: ${(props) => (props.isDarkMode ? "#272d37" : "#ffffff")};
	color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};

	& h1 {
		margin: 0;
		padding: 11rem 0 0.9rem;
		font-size: 8rem;
		font-weight: 700;
	}

	& p {
		margin-bottom: 2.5rem;
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	& a {
		text-decoration: none;
		& button {
			margin: 0 auto;
			color: #ffffff;
			padding: 1.3rem 3rem;
			background: #570df8;
		}
	}
`;

export default NotFound;
