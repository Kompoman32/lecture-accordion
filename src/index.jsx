import React from "react";
import { render } from "react-dom";
import { createItems } from "./generate-items";
import { Accordion } from "./accordion";
import "./index.css";

const items = createItems();

class App extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <div>
        Hello, {userName}
        <Accordion items={items} />
      </div>
    );
  }
}

const root = document.getElementById("root");
render(<App userName="Mike" />, root);
