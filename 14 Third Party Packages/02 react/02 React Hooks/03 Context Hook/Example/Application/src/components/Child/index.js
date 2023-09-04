import React from 'react';
import { useContext } from 'react';

import MyContext from '../../context/MyContext.js';

const Child = () => {
	console.log('Child Component');

	const { name } = useContext(MyContext);
	console.log(name);
	// Return JSX
	return <div>Child</div>;
};

export default Child;
