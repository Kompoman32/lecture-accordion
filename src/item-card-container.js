import * as React from "react"
import {ItemCard} from "./item-card";

export const ItemCardContainer = props => {


    return (<div>
        <button onClick={props.onBackClick}>Back</button>
        <ItemCard item={props.item}/>
    </div>);
}