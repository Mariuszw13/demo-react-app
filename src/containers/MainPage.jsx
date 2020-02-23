import React, {useState, useEffect} from 'react';
import {deleteItem, getItems} from "../services";
import {useCookies} from "react-cookie";
import List from "../components/item/list";
import styled from "styled-components";


const MainPage = ({ className}) => {
    const [items, setItems] = useState([]);
    const [cookies,] = useCookies(['authToken']);

    useEffect(() => {
        getItems(setItems, cookies.authToken);
    }, [cookies]);

    const removeItem = (id) => {
            deleteItem(onDeleteSuccess(id), cookies.authToken, id);
    };

    const onDeleteSuccess = (id) => () => {
        const newArr = [...items];
        const index = newArr.findIndex(item => item.id === id);
        if (index > -1) {
            newArr.splice(index, 1);
            setItems(newArr)
        }
    };

    return <div className={className}>
        <List items={items} removeItem={removeItem}/>
    </div>
}

export default styled(MainPage)`
    padding: 10px 10%;
`;