// Custom Hooks

import { useEffect, useState } from 'react';

export const useGetAPIData = (apiUrl) => {
	console.log('useGetAPIData Custom Hook');
	// Initialization
	const [data, setData] = useState([]);

	// Mounting
	useEffect(() => {
		getData();
	}, []);

	// Methods
	const getData = async () => {
		const options = {
			method: 'GET',
		};

		const response = await fetch(apiUrl, options);
		const data = await response.json();
		console.log(data);
		setData(data);
	};

	// Return Data
	return data;
};
