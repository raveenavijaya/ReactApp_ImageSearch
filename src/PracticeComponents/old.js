import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

//State in React
//Two methods to intialize State. 1. Using constructors
class App extends React.Component {
  constructor(props) {
    super(props);

    //This is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat}</div>;
    }
    return <div>Loading!!!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
