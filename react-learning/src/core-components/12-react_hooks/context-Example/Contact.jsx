import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Contact = () => {
	const { phone, name } = useContext(AppContext);
	return (
		<>
			<h1>Contact</h1>
			<h2>Phone: {phone}</h2>
		</>
	);
};

export default Contact;
