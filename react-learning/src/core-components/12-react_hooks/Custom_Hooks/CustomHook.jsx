import React /* ,{ useState, useEffect }*/ from "react";
import useLocalStorage from "./useLocalStorage";

const CustomHook = () => {
	// const [name, setName] = useState(
	// 	localStorage.getItem("username") ? localStorage.getItem("username") : ""
	// );
	// useEffect(() => {
	// 	localStorage.setItem("username", name);
	// }, [name]);
	const [name, setName] = useLocalStorage("username", "");
	const [job, setJob] = useLocalStorage("job", "");
	return (
		<>
			<h1>CustomHook</h1>

			<input
				type='text'
				placeholder='Enter your Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<h2>Hello, {name}</h2>
			<input
				type='text'
				placeholder='Enter your Profession'
				value={job}
				onChange={(e) => setJob(e.target.value)}
			/>
			<h2>You're, {job}</h2>
		</>
	);
};

export default CustomHook;
