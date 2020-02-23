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
            <Form.Control placeholder={label} {...controlProps}/>
            <Form.Control.Feedback type="invalid">
                {error && error}
            </Form.Control.Feedback>
        </Col>
    </Form.Group>
)

export default FormElement;