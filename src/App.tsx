import React from "react";

interface Person {
  name?: string;
}

function App({ name }: Person) {
  return <h1>{process.env.REACT_APP_MESSAGE} {name}</h1>;
}

App.defaultProps = {
  name: "World",
};

export default App;
