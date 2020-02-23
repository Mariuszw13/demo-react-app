import React from 'react';
import Item from "./index";
import CardColumns from "react-bootstrap/CardColumns";

const List = ({items, removeItem}) => {
    return (
        <CardColumns>
            {items && items.map((item, index) => <Item key={item.id} {...item} removeItem={removeItem}/>)}
        </CardColumns>
    )
};

export default List;