// Functional component - Used when we want to show simple conent to the user.
// Class Component - Used mostly when we have a complex logic, like handlind feedback from users or network requests.
//Primary requirement for class component - We have to define render() method
// Foucsing on learning how state works and lifecycle methods work.
//App has code that determines location + month.
//SeasonDisplay shows different text/icons based on props.
//Getting user current location - Geoloaction API - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

//-----------------------
//Lifecycle of component:
//-----------------------
//componentDidmount()
//  - This function runs only once that is when the component is rendered for the first time.
//  - It is always a best practice to load the data in this function rather than constructor function.
//
//componentDidUpdate() – This function runs every time the component is rerendered.
//componentWillUnmount() – This function will be called when we no longer want component to be shown on the screen.

import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
//State in React
//Two methods to intialize State.
//1. Using constructors
//2. Babel will do it for us
class LifeCycle extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Allow or Block the location!" />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default LifeCycle;
