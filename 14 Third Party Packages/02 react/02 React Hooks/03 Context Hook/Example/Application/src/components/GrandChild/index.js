import React from 'react';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';

const GrandChild = () => {
	console.log('GrandChild Component');

	const { name } = useContext(MyContext);
	console.log(name);

	// Return JSX
	return <div>GrandChild</div>;
};

export default GrandChild;
