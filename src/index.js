import React from 'react';
import ReactDOM from 'react-dom';

const YOUTUBE_API_KEY = 'AIzaSyCJLgy2AdFKjVokCQ00MD-VD7AumXjCJuk';

// Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hi!</div>;
};
// Take this component's generated HTML and put it n the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
