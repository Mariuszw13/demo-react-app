import React, { useState, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { tryLogin } from "../services";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ENTER_KEY_CODE } from "../utils/enums";
import * as PropTypes from "prop-types";

const LoginPage = ({ className }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [, setCookie] = useCookies(["authToken"]);
    const history = useHistory();

    const onLoginSuccess = useCallback(
        token => {
            setCookie("authToken", token, { path: "/" });
            history.push("/");
        },
        [history, setCookie]
    );

    const handleUserKeyPress = useCallback(
        event => {
            const { keyCode } = event;
            if (keyCode === ENTER_KEY_CODE) {
                tryLogin({ username: login, password }, onLoginSuccess, () => null);
            }
        },
        [login, onLoginSuccess, password]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);

        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const handleChange = setter => event => {
        setter(event.target.value);
    };

    const onLoginClick = () => {
        tryLogin({ username: login, password }, onLoginSuccess, () => null);
    };

    return (
        <Form className={className}>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" placeholder="email" value={login} onChange={handleChange(setLogin)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange(setPassword)} />
                </Col>
            </Form.Group>
            <LoginButton variant="primary" onClick={onLoginClick}>
                login
            </LoginButton>
        </Form>
    );
};

LoginPage.propTypes = {
    className: PropTypes.string
};

const LoginButton = styled(Button)`
    width: 50%;
    align-self: center;
`;

export default styled(LoginPage)`
    position: absolute;
    padding: 15px;
    border: 1px solid #a6a6a6;
    top: 30%;
    left: calc(50% - 15vw);
    display: flex;
    flex-direction: column;
    width: 30vw;

    @media (max-width: 1500px) {
        width: 60vw;
        left: calc(50% - 30vw);
    }

    @media (max-width: 750px) {
        width: 80vw;
        left: calc(50% - 40vw);
    }
`;
