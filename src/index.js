import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const YOUTUBE_API_KEY = "AIzaSyCJLgy2AdFKjVokCQ00MD-VD7AumXjCJuk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: YOUTUBE_API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos }); // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it n the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
