import { createStore, combineReducers } from 'redux';

// state Initialization
const initialState = {
	fullName: '',
	balance: 0,
	mobile: null,
};

// reducer Function for modify the prevState
function accountReducer(prevState = initialState, action) {
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

// reducer Function for modify the prevState
function transactionReducer(state = [], action) {
	const { id, type, payload } = action;
	const { amount, date } = payload;

	switch (type) {
		case 'addTransaction':
			return [...state, { id, amount, date, type }];
	}
}

// combine Reducers
const rootReducer = combineReducers({
	account: accountReducer,
	transaction: transactionReducer,
});

// mapping between state & reducer
const myStore = createStore(rootReducer);

export default myStore;
