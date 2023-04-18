import styled from "@emotion/styled";
import ButtonItem from "../components/common/Button";

const NotFound = () => {
	return (
		<Container>
			<h1>404</h1>
			<p>페이지를 찾을 수 없습니다.</p>
			<ButtonItem linkPage="/" content="메인으로" />
		</Container>
	);
};

const Container = styled.section`
	height: 45.7rem;
	text-align: center;
	color: #1f2937;

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

	& button {
		margin: 0 auto;
		color: #ffffff;
		padding: 1.3rem 3rem;
		background: #570df8;
	}
`;

export default NotFound;
