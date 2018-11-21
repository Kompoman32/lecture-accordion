import * as React from "react";

export class ListItem extends React.Component {
  onTitleClick() {
    this.props.onTitleClick(this.props.item);
  }

  render() {
    const { title } = this.props.item;

    return (
      <div className="accordion-item">
        <div className={"header"} onClick={this.onTitleClick.bind(this)}>
          <p> {title}</p>
        </div>
      </div>
    );
  }
}
