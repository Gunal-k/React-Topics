import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
	const phone = "+91 7788996560";
	const name =  "Gunal K";
	return <AppContext.Provider value={{phone,name}}>{props.children}</AppContext.Provider>;
};

export default ContextProvider;