import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Profile = () => {
	const { phone, name } = useContext(AppContext);
	return (
		<>
			<h1>Profile</h1>
			<h2>{name}</h2>
		</>
	);
};

export default Profile;
