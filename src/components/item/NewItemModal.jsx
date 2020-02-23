import React, {useReducer, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {ITEM_TYPE} from "../../utils/enums";
import NewItemForm from "./NewItemForm";
import {newItemSchema} from "./newItemSchema";

const initialState = {
    name: "",
    type: ITEM_TYPE.FOOD,
    price: "",
    quantity: 1,
    volumeWeight: "",
    description: "",
    errorsMap: {},
    isFormValid: false
};

const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result = {...state};
    result[action.type] = action.value;
    return result;
};

const NewItemModal = ({closeModal, visible, addNewItem}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {name, type, price, quantity, volumeWeight, description, errorsMap, isFormValid} = state;

    useEffect(() => {
        const validateForm = () => {
            const resultObject = {
                name,
                ...(type === ITEM_TYPE.FOOD ? {description} : {}),
                volumeWeight,
                price,
                quantity
            };
            newItemSchema.validate(resultObject, {abortEarly: false, isStrict: false})
                .then(() => {
                    setErrorsMap({});
                    dispatch({type: "isFormValid", value: true})
                })
                .catch(err => setErrors(err))
        };

        const setErrors = error => {
            const errorsMap = {};
            error.inner.forEach(err => errorsMap[err.path] = err.message);
            setErrorsMap(errorsMap)
        };

        validateForm();
    }, [name, type, price, quantity, volumeWeight, description]);

    const submitNewItem = () => {
        if (isFormValid) {
            const newItem = {
                name,
                type,
                ...(type === ITEM_TYPE.FOOD ? {description, weight: volumeWeight} : {volume: volumeWeight}),
                price,
                quantity
            };
            addNewItem(newItem);
            closeAndClear();
        }
    };

    const clearState = () => {
        dispatch({type: "reset"});
    };

    const closeAndClear = () => {
        clearState();
        closeModal();
    };

    const handleChange = name => event => {
        dispatch({type: name, value: event.target.value});
    };

    const setErrorsMap = errorsMap => {
        dispatch({type: "errorsMap", value: errorsMap})
    };

    const setType = type => {
        dispatch({type: "type", value: type})
    };

    const formProps = {
        name,
        type,
        setType,
        description,
        volumeWeight,
        price,
        quantity,
        errorsMap,
        handleChange
    };

    return (
        <Modal show={visible} onHide={closeAndClear} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <NewItemForm {...formProps}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeAndClear}>Close</Button>
                <Button variant="primary" disabled={!isFormValid} onClick={submitNewItem}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default NewItemModal;