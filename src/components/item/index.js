import React, {useState} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import {withCookies} from "react-cookie";
import {ITEM_TYPE} from "../../utils/enums";

const Item = ({type, ...rest}) => {
    const componentsMap = {
        [ITEM_TYPE.FOOD]: FoodItem,
        [ITEM_TYPE.DRINK]: DrinkItem
    }
    const Component = componentsMap[type];
    return <Component {...rest}/>

}

const FoodItem = ({name, description, weight, price, quantity}) => {
    return (
        <Container>
            <Title>{name}</Title>
            <Thumbnail src="https://picsum.photos/200"/>
            <span>{description}</span>
            <span>{weight}</span>
            <span>{price}</span>
            <span>{quantity}</span>
        </Container>
    )
};

const DrinkItem = ({name, volume, price, quantity}) => {
    return (
        <Container>
            <Title>{name}</Title>
            <Thumbnail src="https://picsum.photos/200"/>
            <span>{volume}</span>
            <span>{price}</span>
            <span>{quantity}</span>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #A6A6A6;
    padding: 10px;
    margin: 10px 0;
`;

const Thumbnail = styled.img`
    display: block;
    max-height: 100%;
    max-width: 100px;
    width: auto;
    height: auto;
`;

const Title = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 600;
`;

export default Item

