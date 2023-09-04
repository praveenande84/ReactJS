import React from 'react';
import { useContext } from 'react';

import GrandChild from '../GrandChild';
import MyContext from '../../context/MyContext';

const GrandParent = () => {
	console.log('GrandParent Component');

	const { name } = useContext(MyContext);
	console.log(name);

	//Return JSX
	return (
		<div>
			<h1>GrandParent</h1>
			<GrandChild />
		</div>
	);
};

export default GrandParent;
