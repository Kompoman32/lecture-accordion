import * as React from "react";
import { ListItem } from "./list-item";

export class List extends React.Component {
  state = { openedItem: null };

  onItemClick = item => {
    this.props.onItemClick(item)
  };

  render() {
    const { items } = this.props;
    const elements = items.map(item => (
      <ListItem
        key={item.id}
        item={item}
        onTitleClick={this.onItemClick}
        isOpen={item === this.state.openedItem}
      />
    ));
    return <div className={"accordion"}>{elements}</div>;
  }
}
