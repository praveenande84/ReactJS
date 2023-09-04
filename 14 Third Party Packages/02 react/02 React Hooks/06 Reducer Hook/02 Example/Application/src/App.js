import React, { useReducer } from 'react';

const App = () => {
	console.log('App Component');

	// Methods
	const counterReducer = (prevState, action) => {
		console.log('counterReducer');
		console.log(`prevState : ${prevState}, action : ${action}`);

		const { type, payload } = action;
		console.log(type, payload);
		let newState;
		if (type === 'increment') {
			newState = prevState + payload;
		} else {
			newState = prevState - payload;
		}
		return newState;
	};

	// Initialization
	const [counter, dispatchCounter] = useReducer(counterReducer, 0);

	console.log(`currentState:${counter}`);
	console.log('--------------------------');

	// Return JSX
	return (
		<div className="container d-flex flex-row justify-content-center">
			<button
				onClick={() =>
					dispatchCounter({ type: 'decrement', payload: 1 })
				}
				type="button"
				className="btn btn-primary"
			>
				-
			</button>
			<p className="m-2">counter : {counter}</p>
			<button
				onClick={() =>
					dispatchCounter({ type: 'increment', payload: 1 })
				}
				type="button"
				className="btn btn-info"
			>
				+
			</button>
		</div>
	);
};

export default App;
