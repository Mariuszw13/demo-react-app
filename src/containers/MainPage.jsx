import React, {useState, useEffect} from 'react';
import {addItem, deleteItem, getItems} from "../services";
import {useCookies} from "react-cookie";
import List from "../components/item/list";
import styled from "styled-components";
import NewItemModal from "../components/item/form/NewItemModal";
import Button from "react-bootstrap/Button";

const MainPage = ({className}) => {
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisibility] = useState(false);
    const [cookies,] = useCookies(['authToken']);

    useEffect(() => {
        getItems(setItems, cookies.authToken);
    }, [cookies]);

    const removeItem = id => {
        deleteItem(onDeleteSuccess(id), cookies.authToken, id);
    };

    const addNewItem = newItem => {
        addItem(onAddSuccess(newItem), cookies.authToken, newItem);
    };

    const onDeleteSuccess = id => () => {
        const newArr = [...items];
        const index = newArr.findIndex(item => item.id === id);
        if (index > -1) {
            newArr.splice(index, 1);
            setItems(newArr)
        }
    };

    const onAddSuccess = newItem => () => {
        const newArr = [...items, newItem];
        setItems(newArr)
    };

    const openModal = () => setModalVisibility(true);
    const closeModal = () => setModalVisibility(false);

    return (
        <div className={className}>
            <Button onClick={openModal}>Add new item</Button>
            <List items={items} removeItem={removeItem}/>
            <NewItemModal visible={modalVisible} closeModal={closeModal} addNewItem={addNewItem}/>
        </div>
    )
};

export default styled(MainPage)`
    padding: 10px 10%;
`;