import React from "react";
import {render} from "react-dom";
import {createItems} from "./generate-items";
import {List} from "./list";
import "./index.css";
import {ItemCardContainer} from "./item-card-container";

const items = createItems();

class App extends React.Component {

    state={selectedItem:null}

    onItemClick = item => {
        this.setState({selectedItem: item});
    }

    onBackClick = () => {
        this.setState({selectedItem: null});
    }

    render() {
        const item = this.state.selectedItem;
        if (item != null) {
            return (<ItemCardContainer item={item} onBackClick={this.onBackClick}/>)
        }
        return (
            <div>
                <List items={items} onItemClick={this.onItemClick}/>
            </div>
        );
    }
}

const root = document.getElementById("root");
render(<App userName="Mike"/>, root);
