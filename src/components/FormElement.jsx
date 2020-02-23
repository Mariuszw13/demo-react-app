import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormElement = ({label, error, controlProps}) => (
    <Form.Group as={Row}>
        <Form.Label column sm="2">
            {label}
        </Form.Label>
        <Col sm="10">
            <Form.Control placeholder={label} isValid={String(controlProps.value).length && !error} {...controlProps}/>
        </Col>
    </Form.Group>
);

export default FormElement;