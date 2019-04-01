import "./App.css";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getVideoList();
  }
  render() {
    return (
      <div className="main">
        <header className="main-header">Video List</header>
        <main />
      </div>
    );
  }
}

export default App;
