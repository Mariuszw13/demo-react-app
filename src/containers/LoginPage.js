import React, {useState, useCallback, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {tryLogin} from "../services";
import {useCookies} from 'react-cookie';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const LoginPage = ({className}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [, setCookie] = useCookies(['authToken']);
    const history = useHistory();

    const onLoginSuccess = useCallback((token) => {
        setCookie("authToken", token, {path: '/'});
        history.push("/");
    }, []);

    const handleUserKeyPress = useCallback(event => {
        const {keyCode} = event;
        if (keyCode === 13) {
            tryLogin({username: login, password}, onLoginSuccess, () => null)
        }
    }, [login, onLoginSuccess, password]);

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const handleChange = setter => event => {
        setter(event.target.value)
    };

    const onLoginClick = () => {
        console.log(login)
        tryLogin({username: login, password}, onLoginSuccess, () => null)
    };

    return (
        <Form className={className}>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" placeholder="email" value={login} onChange={handleChange(setLogin)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" value={password}
                                  onChange={handleChange(setPassword)}/>
                </Col>
            </Form.Group>
            <Button className="login-button" variant="contained" color="primary" onClick={onLoginClick}>
                login
            </Button>
        </Form>)
}

export default styled(LoginPage)`
    position: absolute;
    padding: 15px;
    border: 1px solid #A6A6A6;
    top: 30%;
    left: calc(50% - 15vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    
    .text-field {
        margin-bottom: 15px;
    }
`;