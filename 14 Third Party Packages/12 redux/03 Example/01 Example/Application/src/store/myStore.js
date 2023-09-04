import { createStore } from 'redux';

// state Initialization
const initialState = {
	fullName: '',
	balance: 0,
	mobile: null,
};

// reducer for modify the prevState
function stateReducer(prevState = initialState, action) {
	// Here, we can use switch case also
	const { type, payload } = action;
	if (type === 'deposit') {
		const newDeposit = payload;
		return { ...prevState, balance: prevState.balance + newDeposit };
	} else if (type === 'withdraw') {
		const newWithdraw = payload;
		return { ...prevState, balance: prevState.balance - newWithdraw };
	} else if (type === 'mobileUpdate') {
		const updatedMobile = payload;
		return { ...prevState, mobile: updatedMobile };
	} else if (type === 'fullNameUpdate') {
		const updatedFullName = payload;
		return { ...prevState, fullName: updatedFullName };
	}
	return prevState;
}

// mapping between state & reducer
const myStore = createStore(stateReducer);

// current State
const currentState1 = myStore.getState();
console.log(currentState1);

// call reducer with action argument-> redux method
myStore.dispatch({ type: 'deposit', payload: 1000 });
myStore.dispatch({ type: 'withdraw', payload: 500 });
myStore.dispatch({ type: 'mobileUpdate', payload: 8185995403 });
myStore.dispatch({ type: 'fullNameUpdate', payload: 'Ande Praveen' });

// current State
const currentState2 = myStore.getState();
console.log(currentState2);
