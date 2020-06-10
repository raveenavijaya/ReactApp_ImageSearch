// Displaying content with function component

//Importing react and react-dom
import React from "react";
import ReactDOM from "react-dom";

//Create a react component

const App = () => {
  //Always put the opening line of the jsx next to the return keyword or else it will return an error.
  return <h1>Hello World!!</h1>;
};

//Displaying the content in the react component on the screen using ReactDOM library.

ReactDOM.render(<App />, document.getElementById("root"));
