import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';

import { Provider } from 'react-redux';
import myStore from './store/myStore';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={myStore}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
