import React from 'react';
import { useGetAPIData } from './utilities'; // Custom Hooks

const App = () => {
	console.log('App Component');

	const apiUrl = 'https://fakestoreapi.com/products/1';
	const data = useGetAPIData(apiUrl);
	console.log(data);

	// Return JSX
	return <div>Custom Hook</div>;
};

export default App;
