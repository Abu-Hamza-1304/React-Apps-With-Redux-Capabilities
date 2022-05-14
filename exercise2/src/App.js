import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.data}
          placeholder={"Please enter name"}
          onChange={(e) =>
            this.setState({
              ...this.state.data, data: e.target.value
            })
          }
        />
        <h2>{this.state.data}</h2>
      </div>
    );
  }
}

export default App;
