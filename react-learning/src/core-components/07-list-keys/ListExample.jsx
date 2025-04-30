import React from "react";

const ListExample = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <>
      <h1>List Example</h1>
      <ul>
        {/* {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })} */}
        {
            items.map((item,index) => <li key={index}>{item}</li>)
        }
      </ul>
    </>
  );
};

export default ListExample;
