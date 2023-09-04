import React from 'react';
import { useState } from 'react';

import GrandParent from './components/GrandParent';
import Parent from './components/Parent';
import Child from './components/Child';
import MyContext from './context/MyContext';

const App = () => {
	console.log('App Component');

	const [name, setName] = useState('Ande Praveen');

	const onUpdateName = (updatedName) => {
		setName(updatedName);
	};

	// React ContextObject
	const valueObject = {
		name,
		onUpdateName,
	};

	// Return JSX
	return (
		<div>
			<MyContext.Provider value={valueObject}>
				<GrandParent />
				<Parent />
				<Child />
			</MyContext.Provider>
		</div>
	);
};

export default App;
