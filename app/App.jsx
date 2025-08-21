import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Sample App</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Button</button>
      <button onClick={() => setCount(count - 1)}>Decrement Button</button>
    </div>
  );
}

export default App;
