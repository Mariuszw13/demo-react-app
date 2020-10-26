import React, { useState, useEffect } from "react";
import { addItem, deleteItem, getItems } from "../services";
import List from "../components/item/list";
import styled from "styled-components";
import NewItemModal from "../components/item/form/NewItemModal";
import Button from "react-bootstrap/Button";
import { useAuthToken } from "../login/useAuthToken";
import * as PropTypes from "prop-types";

const MainPage = ({ className }) => {
    const [items, setItems] = useState([]);
    const [lastAddedIndex, setLastAddedIndex] = useState(6);
    const [modalVisible, setModalVisibility] = useState(false);
    const authToken = useAuthToken();

    useEffect(() => {
        getItems(setItems, authToken);
    }, [authToken]);

    const removeItem = id => {
        // due to mocked api, there are 5 mocked items
        if (id < 6) {
            deleteItem(onDeleteSuccess(id), authToken, id);
        } else {
            onDeleteSuccess(id)();
        }
    };

    const addNewItem = newItem => {
        addItem(onAddSuccess(newItem), authToken, newItem);
    };

    const onDeleteSuccess = id => () => {
        const newArr = items.filter(item => item.id !== id);
        setItems(newArr);
    };

    const onAddSuccess = newItem => () => {
        const newArr = [...items, newItem];
        setLastAddedIndex(newItem.id);
        setItems(newArr);
    };

    const openModal = () => setModalVisibility(true);
    const closeModal = () => setModalVisibility(false);
    
    return (
        <div className={className}>
            <Button onClick={openModal}>Add new item</Button>
            <List items={items} removeItem={removeItem} />
            <NewItemModal visible={modalVisible} closeModal={closeModal} addNewItem={addNewItem} lastAddedIndex={lastAddedIndex} />
        </div>
    );
};

MainPage.propTypes = {
    className: PropTypes.string,
};

export default styled(MainPage)`
    padding: 10px 10%;
`;
