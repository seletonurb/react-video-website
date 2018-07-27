import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const YOUTUBE_API_KEY = "AIzaSyCJLgy2AdFKjVokCQ00MD-VD7AumXjCJuk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: YOUTUBE_API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] }); // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it n the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
