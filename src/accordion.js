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

  get filteredElements() {
    const items = this.props.items;
    const search = this.props.search;
    if (!search) {
      return items || [];
    }

    return (items || []).filter(
      item => item.content.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  render() {
    const elements = this.filteredElements.map(item => (
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
