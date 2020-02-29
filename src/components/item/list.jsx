import React from "react";
import Item from "./index";
import CardColumns from "react-bootstrap/CardColumns";
import * as PropTypes from "prop-types";

const List = ({ items, removeItem }) => {
    return <CardColumns>{items && items.map(item => <Item key={item.id} {...item} removeItem={removeItem} />)}</CardColumns>;
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    removeItem: PropTypes.func,
};

export default List;
