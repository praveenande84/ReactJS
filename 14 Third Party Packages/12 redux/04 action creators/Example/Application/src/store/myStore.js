import { createStore } from 'redux';

// state Initialization
const initialState = {
	fullName: '',
	balance: 0,
	mobile: null,
};

// reducer Function for modify the prevState
function stateReducer(prevState = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'deposit':
			return { ...prevState, balance: prevState.balance + +payload };
		case 'withdraw':
			return { ...prevState, balance: prevState.balance - +payload };
		case 'mobileUpdate':
			return { ...prevState, mobile: payload };
		case 'fullNameUpdate':
			return { ...prevState, fullName: payload };
		case 'reset':
			return initialState;
		default:
			return prevState;
	}
}

// mapping between state & reducer
const myStore = createStore(stateReducer);

export default myStore;
