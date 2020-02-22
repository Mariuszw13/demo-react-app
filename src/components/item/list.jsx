import React from 'react';
import Item from "./index";
import CardColumns from "react-bootstrap/CardColumns";

const List = ({items}) => {
    return (
        <CardColumns>
            {items && items.map((item, index) => <Item key={index} {...item} />)}
        </CardColumns>
    )
};

export default List;