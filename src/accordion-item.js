import * as React from "react";

export class AccordionItem extends React.Component {
  renderContent() {
    const { content } = this.props.item;

    if (!this.props.isOpen) {
      return;
    }
    return <div className={"content"}>{content}</div>;
  }

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
        {this.renderContent()}
      </div>
    );
  }
}
