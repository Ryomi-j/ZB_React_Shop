import styled from "@emotion/styled";

export const Loading = () => {
    return <LoadingBox>Loading...</LoadingBox>
}


const LoadingBox = styled.div`
	padding-top: 15rem;
	width: 56rem;
	height: 20rem;
	text-align: center;
	font-size: 3rem;
`;