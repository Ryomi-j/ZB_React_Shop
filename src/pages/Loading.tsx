import styled from "@emotion/styled";

export const Loading = () => {
  return (
    <LoadingBox>
      <svg
        width="50"
        height="50"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity="0" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </LoadingBox>
  );
};

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 3rem;
`;
