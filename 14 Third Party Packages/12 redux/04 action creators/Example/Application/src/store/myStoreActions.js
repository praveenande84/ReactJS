// Action Creators

export const deposit = (amount) => {
	return { type: 'deposit', payload: amount };
};

export const withdraw = (amount) => {
	return { type: 'withdraw', payload: amount };
};

export const mobileUpdate = (number) => {
	return { type: 'mobileUpdate', payload: number };
};

export const fullNameUpdate = (name) => {
	return { type: 'fullNameUpdate', payload: name };
};

export const reset = () => {
	return { type: 'reset' };
};
