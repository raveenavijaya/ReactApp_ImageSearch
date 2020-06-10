import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  //const buttonText = "Submit";
  const buttonText = { text: "Submit" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      style = "background-co"
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
