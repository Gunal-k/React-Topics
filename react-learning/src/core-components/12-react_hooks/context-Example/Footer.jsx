import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Footer = () => {
	const {phone,name} = useContext(AppContext);
	return (
		<>
			<h1>Footer</h1>
			<h2>Phone: {phone}</h2>
		</>
	);
};

export default Footer;
