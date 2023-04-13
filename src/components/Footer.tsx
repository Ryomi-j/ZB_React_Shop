import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as Visa } from "../assets/cards/visa.svg";
import { ReactComponent as Master } from "../assets/cards/master.svg";
import { ReactComponent as Amax } from "../assets/cards/amax.svg";
import { ReactComponent as Paypal } from "../assets/cards/paypal.svg";
import { ReactComponent as Diners } from "../assets/cards/diners_club.svg";
import { ReactComponent as Discover } from "../assets/cards/discover.svg";

const Footer = () => {
	let cards = [Visa, Master, Amax, Paypal, Diners, Discover];

	return (
		<FooterContainer>
			<Link to={"https://zero-base.co.kr/"}>제로베이스</Link>
			<CardList>
				
					{cards.map((Card, key) => (
						<li><Card key={key} /></li>
					))}
				
			</CardList>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
`;

const CardList = styled.ul`
	display: flex;
	gap: 10px;
`


export default Footer;
