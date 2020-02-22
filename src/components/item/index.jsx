import React from 'react';
import styled from 'styled-components';
import {ITEM_TYPE} from "../../utils/enums";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {randomFromRange} from "../../utils";
import ItemValue from "./ItemValue";

const Item = ({type, name, ...rest}) => {
    const componentsMap = {
        [ITEM_TYPE.FOOD]: FoodItem,
        [ITEM_TYPE.DRINK]: DrinkItem
    };
    const Component = componentsMap[type];
    return (
        <Card>
            <Card.Img variant="top" src={`https://picsum.photos/id/${randomFromRange(0, 400)}/400`}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Component {...rest}/>
                <Button variant="danger">Remove</Button>
            </Card.Body>
        </Card>
    )

}

const FoodItem = ({description, weight, price, quantity}) =>
    (
        <>
            <Card.Text>
                {description}
            </Card.Text>
            <ItemData>
                <ItemValue label="Weight" unit="kg">{weight}</ItemValue>
                <ItemValue label="Price" unit="$">{price}</ItemValue>
                <ItemValue label="Quantity">{quantity}</ItemValue>
            </ItemData>
        </>
    );

const DrinkItem = ({volume, price, quantity}) => {
    return (
        <ItemData>
            <ItemValue label="Volume" unit="l">{volume}</ItemValue>
            <ItemValue label="Price" unit="$">{price}</ItemValue>
            <ItemValue label="Quantity">{quantity}</ItemValue>
        </ItemData>
    )
};

const ItemData = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Item

