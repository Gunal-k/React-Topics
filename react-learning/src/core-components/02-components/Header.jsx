import React from "react";

const Header = (newFn) => {
	console.log("Header Rendered");
	return (
		<>
			<h1>Header</h1>
			{/* <h2>{newFn.newFn()}</h2> */}
		</>
	);
};

export default React.memo(Header);
