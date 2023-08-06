import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../constants";


interface RatingProps {
	rate: number;
	count: number;
}

interface DataProps {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: RatingProps;
}

const getData = () => {
	const [data, setData] = useState<DataProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<DataProps[]>(API);
				setData(response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	return data;
};

export default getData;
