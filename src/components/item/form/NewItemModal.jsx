import React, { useReducer, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ITEM_TYPE } from "../../../utils/enums";
import NewItemForm from "./NewItemForm";
import { validateForm } from "./newItemSchema";
import * as PropTypes from "prop-types";

const initialState = {
    name: "",
    type: ITEM_TYPE.FOOD,
    price: "",
    quantity: 1,
    volumeWeight: "",
    description: "",
    errorsMap: {},
    isFormValid: false,
};

const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

const NewItemModal = ({ closeModal, visible, addNewItem, lastAddedIndex }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, type, price, quantity, volumeWeight, description, errorsMap, isFormValid } = state;

    useEffect(() => {
        const resultObject = {
            name,
            ...(type === ITEM_TYPE.FOOD ? { description } : {}),
            volumeWeight,
            price,
            quantity,
        };
        const onValidationSuccess = () => {
            setErrorsMap({});
            dispatch({ type: "isFormValid", value: true });
        };

        const setErrors = error => {
            const errorsMap = {};
            error.inner.forEach(err => (errorsMap[err.path] = err.message));
            setErrorsMap(errorsMap);
            dispatch({ type: "isFormValid", value: false });
        };
        validateForm(resultObject, onValidationSuccess, err => setErrors(err));
    }, [name, type, price, quantity, volumeWeight, description]);

    const submitNewItem = () => {
        if (isFormValid) {
            const newItem = {
                id: lastAddedIndex + 1,
                name,
                type,
                ...(type === ITEM_TYPE.FOOD
                    ? { description, weight: Number.parseFloat(volumeWeight) }
                    : { volume: Number.parseFloat(volumeWeight) }),
                price: Number.parseFloat(price),
                quantity: Number.parseInt(quantity),
            };
            addNewItem(newItem);
            closeAndClear();
        }
    };

    const clearState = () => {
        dispatch({ type: "reset" });
    };

    const closeAndClear = () => {
        clearState();
        closeModal();
    };

    const handleChange = name => event => {
        dispatch({ type: name, value: event.target.value });
    };

    const setErrorsMap = errorsMap => {
        dispatch({ type: "errorsMap", value: errorsMap });
    };

    const setType = type => {
        dispatch({ type: "type", value: type });
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
        handleChange,
    };

    return (
        <Modal show={visible} onHide={closeAndClear} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <NewItemForm {...formProps} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeAndClear}>
                    Close
                </Button>
                <Button variant="primary" disabled={!isFormValid} onClick={submitNewItem}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewItemModal;

NewItemModal.propTypes = {
    closeModal: PropTypes.func,
    visible: PropTypes.bool,
    addNewItem: PropTypes.func,
    lastAddedIndex: PropTypes.number
};
