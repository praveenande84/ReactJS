import React from 'react';
import { useMemo, useState } from 'react';

/*
when re-render,  the function only will call when dependency array values changes.
stop the function call when same arguments of re-render
*/

const App = () => {
	console.log('App Component');

	const [isDone, setIsDone] = useState(true);

	let a = 10;
	let b = 20;

	// Methods
	const sum = (num1, num2) => {
		console.log('sum Method');
		return num1 + num2;
	};

	let result1 = useMemo(() => {
		console.log('useMemo Call');
		const add1 = sum(a, b);
		return add1;
	}, [a, b]);

	console.log(result1);

	// Return JSX
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setIsDone(!isDone);
				}}
			>
				Update State
			</button>
		</div>
	);
};

export default App;
