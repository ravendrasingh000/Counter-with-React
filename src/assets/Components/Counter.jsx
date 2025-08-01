import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

   const headingStyle = {
    color: count <= 0 ? "red" : "black"
  };

  return (
    <div id="container">
      <h1 style={headingStyle}>{count}</h1>
      <div id="btn">
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter; 
