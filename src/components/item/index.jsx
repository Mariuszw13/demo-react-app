import React from "react";
import styled from "styled-components";
import { ITEM_TYPE } from "../../utils/enums";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemValue from "./ItemValue";
import * as PropTypes from "prop-types";

const Item = ({ type, name, id, removeItem, ...rest }) => {
    const componentsMap = {
        [ITEM_TYPE.FOOD]: FoodItem,
        [ITEM_TYPE.DRINK]: DrinkItem,
    };
    const Component = componentsMap[type];
    return (
        <Card>
            <Card.Img variant="top" src={`https://picsum.photos/id/${id + 20}/400`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Component {...rest} />
                <Button variant="danger" onClick={() => removeItem(id)}>
                    Remove
                </Button>
            </Card.Body>
        </Card>
    );
};

Item.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    removeItem: PropTypes.func,
};

const FoodItem = ({ description, weight, price, quantity }) => (
    <>
        <Card.Text>{description}</Card.Text>
        <ItemData>
            <ItemValue label="Weight" unit="kg">
                {weight}
            </ItemValue>
            <ItemValue label="Price" unit="$">
                {price}
            </ItemValue>
            <ItemValue label="Quantity">{quantity}</ItemValue>
        </ItemData>
    </>
);

FoodItem.propTypes = {
    description: PropTypes.string,
    weight: PropTypes.number,
    price: PropTypes.number,
    quantity: PropTypes.number,
};

const DrinkItem = ({ volume, price, quantity }) => {
    return (
        <ItemData>
            <ItemValue label="Volume" unit="l">
                {volume}
            </ItemValue>
            <ItemValue label="Price" unit="$">
                {price}
            </ItemValue>
            <ItemValue label="Quantity">{quantity}</ItemValue>
        </ItemData>
    );
};

DrinkItem.propTypes = {
    volume: PropTypes.number,
    price: PropTypes.number,
    quantity: PropTypes.number,
};

const ItemData = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Item;
