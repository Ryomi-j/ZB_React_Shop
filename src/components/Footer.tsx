import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as Visa } from "../assets/cards/visa.svg";
import { ReactComponent as Master } from "../assets/cards/master.svg";
import { ReactComponent as Amax } from "../assets/cards/amax.svg";
import { ReactComponent as Paypal } from "../assets/cards/paypal.svg";
import { ReactComponent as Diners } from "../assets/cards/diners_club.svg";
import { ReactComponent as Discover } from "../assets/cards/discover.svg";
import { RiFacebookFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import shortid from "shortid";

const Footer = () => {
	let cards = [Visa, Master, Amax, Paypal, Diners, Discover];
	return (
		<FooterContainer>
			<Link to="https://zero-base.co.kr/">제로베이스</Link>
			<CardList>
				{cards.map((Card) => (
					<li key={shortid.generate()}>
						<Card />
					</li>
				))}
			</CardList>
			<SNSContainer>
				<Link to="https://www.facebook.com/0base">
					<RiFacebookFill />
				</Link>
				<Link to="https://www.instagram.com/zerobase.official/">
					<FiInstagram />
				</Link>
				<Link to="https://github.com/Ryomi-j/ZB_React_Shop">
					<AiFillGithub />
				</Link>
			</SNSContainer>
			<p>Copyright © 2022 Zero Base</p>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	padding: 3rem;
	line-height: 1.25rem;
	text-align: center;
	background-color: rgba(229, 231, 235, .2);
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
`;

export default Footer;
