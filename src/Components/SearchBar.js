import React from "react";

class SearchBar extends React.Component {
  //This is uncontrolled
  //The name of this function is community convention on how we name them
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term)
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          // onSubmit={(event) => this.onFormSubmit(event)}
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            {/* onChange is a property -- se in word file */}
            {/* Alternate way to write event handler  onChange={(event) => event.traget.value*/}
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
