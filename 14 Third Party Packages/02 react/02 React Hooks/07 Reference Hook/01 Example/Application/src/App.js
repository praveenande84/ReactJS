import { useRef } from 'react';

import './App.css';

const App = () => {
	console.log('App Component');

	let headingElement = useRef(null);
	console.log(headingElement);

	// Return JSX
	return (
		<div>
			<h1 ref={headingElement} className="in-active">
				This Heading Tag
			</h1>
			<button
				type="button"
				onClick={() => {
					// the component will not re-render when changes done with useRef
					console.log(headingElement);
					console.log(headingElement.current);
					headingElement.current.classList.toggle('active');
					headingElement.current.classList.toggle('in-active');
				}}
			>
				Click
			</button>
		</div>
	);
};

export default App;
