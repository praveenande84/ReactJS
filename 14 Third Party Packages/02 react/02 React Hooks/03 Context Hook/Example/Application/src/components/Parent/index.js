import React from 'react';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';

const Parent = () => {
	console.log('Parent Component');

	const { name } = useContext(MyContext);
	console.log(name);

	// Return JSX
	return <div>Parent</div>;
};

export default Parent;
