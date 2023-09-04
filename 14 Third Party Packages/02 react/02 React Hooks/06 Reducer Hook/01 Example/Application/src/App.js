import React, { useReducer } from 'react';

const App = () => {
	console.log('App Component');

	// Methods
	const counterReducer = (prevState, myInput) => {
		console.log('counterReducer');
		console.log(`prevState : ${prevState}, myInput : ${myInput}`);

		const newState = prevState + myInput;
		return newState;
	};

	// Initialization
	const [counter, dispatchCounter] = useReducer(counterReducer, 0);

	console.log(`currentState:${counter}`);

	// Return JSX
	return (
		<div className="container d-flex flex-row justify-content-center">
			<button
				onClick={() => dispatchCounter(-1)}
				type="button"
				className="btn btn-primary"
			>
				-
			</button>
			<p className="m-2">counter : {counter}</p>
			<button
				onClick={() => dispatchCounter(1)}
				type="button"
				className="btn btn-info"
			>
				+
			</button>
		</div>
	);
};

export default App;
