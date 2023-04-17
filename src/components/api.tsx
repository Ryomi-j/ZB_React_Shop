import { useEffect, useState } from "react";
import axios from "axios";


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

const GetData = (url: string) => {
	const [data, setData] = useState<DataProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<DataProps[]>(url);
				setData(response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, [url]);

	return data;
};

export default GetData;
