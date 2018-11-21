import React from "react";
import { render } from "react-dom";
import { createItems } from "./generate-items";
import { Accordion } from "./accordion";
import "./index.css";

const items = createItems(3000);

class App extends React.Component {
  state = { name: "", search: "" };

  onNameChange = ev => {
    this.setState({ name: ev.currentTarget.value || "" });
  };

  onSearchChange = ev => {
    this.setState({ search: ev.currentTarget.value || "" });
  };

  render() {
    const { name ,search} = this.state;
    return (
      <div>
        <input type="text" onChange={this.onNameChange} value={name} />
        <br />
        Hello, {name}
        <br />
        <label>
          Поиск
          <input type="text" onChange={this.onSearchChange} value={search} />
        </label>
        <br />
        <Accordion items={items} search={search}/>
      </div>
    );
  }
}

const root = document.getElementById("root");
render(<App />, root);
