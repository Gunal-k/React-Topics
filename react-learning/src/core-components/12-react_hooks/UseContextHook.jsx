import React,{useContext} from "react";
import Profile from "./context-Example/Profile";
import Footer from "./context-Example/Footer";
import Contact from "./context-Example/Contact";

const UseContextHook = () => {
	return (
		<>
			<h1>UseContext Hook</h1>
			<Profile/>
			<Contact/>
			<Footer/>
		</>
	);
};

export default UseContextHook;