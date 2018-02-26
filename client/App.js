import React, { Component } from "react";

const PATH_BASE = "http://ws.audioscrobbler.com/2.0/";
const PATH_METHOD = "?method=track.search";

const ARTIST_PARAM = "&artist=";
const DEFAULT_QUERY = "tycho";
const TRACK_PARAM = "&track=see";

const API_KEY = "&api_key=e195719fedbba9ae96a1492d018dd9bb";
const FORMAT_PARAM = "&format=json";

const url = `${PATH_BASE}${PATH_METHOD}${ARTIST_PARAM}${DEFAULT_QUERY}${TRACK_PARAM}${API_KEY}${FORMAT_PARAM}`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(url);
    return <div>App</div>;
  }
}

export default App;
