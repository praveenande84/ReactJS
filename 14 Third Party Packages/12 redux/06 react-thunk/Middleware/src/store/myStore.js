import { createStore, applyMiddleware } from 'redux';

// State Initialization

const initialState = {
	userData: {
		name: 'praveen',
	},
};

// Reducer
const userReducer = (prevState = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'add':
			return { ...prevState, userData: payload };
		default:
			return prevState;
	}
};

const store = createStore(userReducer, applyMiddleware(thunk));
//  dispatch({ type: 'add', payload: '' }, );

export default store;
