import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {ITEM_TYPE} from "../../utils/enums";
import FormElement from "../FormElement";

const NewItemForm = ({
                         name, setName,
                         type, setType,
                         description, setDescription,
                         volumeWeight, setVolumeWeight,
                         price, setPrice,
                         quantity, setQuantity
                     }) => {

    const handleChange = setter => event => {
        setter(event.target.value)
    };

    return (
        <Form>
            <FormElement label="Name" controlProps={{value: name, onChange: handleChange(setName)}}/>
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Type
                </Form.Label>
                <Col sm="10">
                    <DropdownButton id="dropdown-basic-button" title={type.toUpperCase()}>
                        {Object.values(ITEM_TYPE).map((itemType, index) =>
                            <Dropdown.Item key={index} onClick={() => setType(itemType)}>
                                {itemType}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </Col>
            </Form.Group>
            {type === ITEM_TYPE.FOOD && <FormElement label="Description" controlProps={{
                value: description,
                onChange: handleChange(setDescription),
                as: "textarea"
            }}/>}
            <FormElement label={type === ITEM_TYPE.FOOD ? "Weight [kg]" : "Volume [l]"}
                         controlProps={{value: volumeWeight, onChange: handleChange(setVolumeWeight)}}/>
            <FormElement label="Price [$]" controlProps={{value: price, onChange: handleChange(setPrice)}}/>
            <FormElement label="Quantity" controlProps={{value: quantity, onChange: handleChange(setQuantity)}}/>
        </Form>
    )
}

export default NewItemForm;