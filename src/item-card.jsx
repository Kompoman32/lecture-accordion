import * as React from "react";

export class ItemCard extends React.Component {

    render() {
        return (<div>
            {this.props.item.content}
        </div>)
    }
}