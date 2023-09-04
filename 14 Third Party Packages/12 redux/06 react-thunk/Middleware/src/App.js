import React from 'react';

/* -----> Third Party Packages <----- */
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state);
	console.log(data);

	const fetchData = async (dispatch, getState) => {
		console.log(getState());
		const apiUrl = 'https://jsonplaceholder.typicode.com/users';
		const response = await fetch(apiUrl);
		const data = await response.json();
		dispatch({ type: 'add', payload: data });
	};

	// Return JSX
	return (
		<div>
			<button
				className="btn btn-primary"
				type="button"
				onClick={() => dispatch(fetchData())}
			>
				Get
			</button>
		</div>
	);
};

export default App;
