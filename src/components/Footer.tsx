import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { ReactComponent as Visa } from "../assets/cards/visa.svg";
import { ReactComponent as Master } from "../assets/cards/master.svg";
import { ReactComponent as Amax } from "../assets/cards/amax.svg";
import { ReactComponent as Paypal } from "../assets/cards/paypal.svg";
import { ReactComponent as Diners } from "../assets/cards/diners_club.svg";
import { ReactComponent as Discover } from "../assets/cards/discover.svg";
import { RiFacebookFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
	let cards = [Visa, Master, Amax, Paypal, Diners, Discover];
	return (
		<FooterContainer isDarkMode={isDarkMode}>
			<Link to="https://zero-base.co.kr/" target="_blank">
				제로베이스
			</Link>
			<CardList>
				{cards.map((Card, idx) => (
					<li key={idx}>
						<Card />
					</li>
				))}
			</CardList>
			<SNSContainer>
				<Link to="https://www.facebook.com/0base" target="_blank" id="Facebook">
					<RiFacebookFill />
				</Link>
				<Link to="https://www.instagram.com/zerobase.official/" target="_blank" id="Instagram">
					<FiInstagram />
				</Link>
				<Link to="https://github.com/Ryomi-j/ZB_React_Shop" target="_blank" id="Github">
					<AiFillGithub />
				</Link>
				<StyledTooltip anchorSelect="#Facebook" content="Facebook" place="bottom" />
				<StyledTooltip anchorSelect="#Github" content="Github" place="bottom" />
				<StyledTooltip anchorSelect="#Instagram" content="Instagram" place="bottom" />
			</SNSContainer>
			<p>Copyright © 2022 Zero Base</p>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer<{ isDarkMode: boolean }>`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	padding: 3rem;
	margin-top: auto;
	max-width: 100%;
	line-height: 1.25rem;
	text-align: center;
	background: ${(props) => (props.isDarkMode ? "#242933" : "#f9fafb")};
	color: ${(props) => (props.isDarkMode ? "#a6adba" : "#1f2937")};
`;

const CardList = styled.ul`
	display: flex;
	gap: 10px;
	justify-content: center;
`;

const SNSContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;

	& a {
		color: inherit;
	}
`;

const StyledTooltip = styled(Tooltip)`
	font-size: 0.7rem;
	background: #303f54;
	border-radius: 10px;
`;
export default Footer;
