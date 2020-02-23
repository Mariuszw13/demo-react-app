import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {ITEM_TYPE} from "../../../utils/enums";
import FormElement from "../../FormElement";

const NewItemForm = ({
                         name,
                         type,
                         setType,
                         description,
                         volumeWeight,
                         price,
                         quantity,
                         errorsMap,
                         handleChange
                     }) => {
    return (
        <Form>
            <FormElement label="Name" error={errorsMap["name"]}
                         controlProps={{value: name, onChange: handleChange("name")}}/>
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
            {type === ITEM_TYPE.FOOD &&
            <FormElement label="Description" error={errorsMap["description"]} controlProps={{
                value: description,
                onChange: handleChange("description"),
                as: "textarea"
            }}/>}
            <FormElement label={type === ITEM_TYPE.FOOD ? "Weight [kg]" : "Volume [l]"}
                         error={errorsMap["volumeWeight"]}
                         controlProps={{value: volumeWeight, onChange: handleChange("volumeWeight")}}/>
            <FormElement label="Price [$]" error={errorsMap["price"]}
                         controlProps={{value: price, onChange: handleChange("price")}}/>
            <FormElement label="Quantity" error={errorsMap["quantity"]}
                         controlProps={{value: quantity, onChange: handleChange("quantity")}}/>
        </Form>
    )
};

export default NewItemForm;