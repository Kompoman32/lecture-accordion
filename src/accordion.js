import * as React from "react";
import { AccordionItem } from "./accordion-item";

export class Accordion extends React.Component {
  state = { openedItem: null };

  onItemClick = item => {
    if (this.state.openedItem !== item) {
      this.setState({ openedItem: item });
    } else {
      this.setState({ openedItem: null });
    }
  };

  render() {
    const { items } = this.props;
    const elements = items.map(item => (
      <AccordionItem
        key={item.id}
        item={item}
        onTitleClick={this.onItemClick}
        isOpen={item === this.state.openedItem}
      />
    ));
    return <div className={"accordion"}>{elements}</div>;
  }
}
