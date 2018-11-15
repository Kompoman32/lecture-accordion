import React from "react";
import { render } from "react-dom";
import {createItems} from "./generate-items";

class App extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

console.log(createItems())

const root = document.getElementById("root");
render(<App />, root);
