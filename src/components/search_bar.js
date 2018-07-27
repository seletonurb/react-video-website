import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "", placeholder: "Search here" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        placeholder={this.state.placeholder}
        onChange={event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }

}

export default SearchBar;
