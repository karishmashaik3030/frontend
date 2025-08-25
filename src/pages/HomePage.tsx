import React from "react";
import Button from "../components/Button";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Button label="Click Over here to get details" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

export default HomePage;
