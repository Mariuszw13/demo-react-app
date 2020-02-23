import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {ITEM_TYPE} from "../../utils/enums";
import NewItemForm from "./NewItemForm";

const NewItemModal = ({closeModal, visible, addNewItem}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState(ITEM_TYPE.FOOD);
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [volumeWeight, setVolumeWeight] = useState("");
    const [description, setDescription] = useState("");

    const formProps = {
        name,
        setName,
        type,
        setType,
        description,
        setDescription,
        volumeWeight,
        setVolumeWeight,
        price,
        setPrice,
        quantity,
        setQuantity
    };

    const submitNewItem = () => {

    }

    return (
        <Modal show={visible} onHide={closeModal} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <NewItemForm {...formProps}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="primary" onClick={submitNewItem}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewItemModal;