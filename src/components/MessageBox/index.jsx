import { string } from "prop-types";
import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const MessageBox = ({ title, text }) => (
    <CenteredCard>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </CenteredCard>
);

const CenteredCard = styled(Card)`
    width: 50%;
    text-align: center;
    margin: 10px auto;
`;

MessageBox.propTypes = {
    title: string,
    text: string,
};

export default MessageBox;
