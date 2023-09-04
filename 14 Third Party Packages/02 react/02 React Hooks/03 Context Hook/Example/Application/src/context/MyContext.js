import { createContext } from 'react';

const MyContext = createContext({
	name: '',
	onUpdateName: () => {},
});

export default MyContext;
