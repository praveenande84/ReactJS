import { useRef } from 'react';

import './App.css';

const App = () => {
	console.log('App Component');

	let headingElements = useRef([]);
	console.log(headingElements);

	// Methods
	const changeStyle = (elementEvent) => {
		for (let element of headingElements.current) {
			element.classList.remove('active');
		}
		elementEvent.target.classList.add('active');
	};

	// Return JSX
	return (
		<div>
			<h1
				ref={(element) => (headingElements.current[0] = element)}
				onClick={(event) => changeStyle(event)}
			>
				Heading Element 1
			</h1>
			<h1
				ref={(element) => (headingElements.current[1] = element)}
				onClick={(event) => changeStyle(event)}
			>
				Heading Element 2
			</h1>
			<h1
				ref={(element) => (headingElements.current[2] = element)}
				onClick={(event) => changeStyle(event)}
			>
				Heading Element 3
			</h1>
			<h1
				ref={(element) => (headingElements.current[3] = element)}
				onClick={(event) => changeStyle(event)}
			>
				Heading Element 4
			</h1>
			<h1
				ref={(element) => (headingElements.current[4] = element)}
				onClick={(event) => changeStyle(event)}
			>
				Heading Element 5
			</h1>
		</div>
	);
};

export default App;
