import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Layout = ({className, children}) => {
    const history = useHistory();
    const [cookie, _, removeCookie] = useCookies(['authToken']);

    const logout = () => {
        const options = {
            path: "/"
        };
        removeCookie("authToken", options);
        history.push("/login")
    };

    return (
        <>
            <div className={className}>
                <CenterNavLink to="/">Home</CenterNavLink>
                <h1>Web App</h1>
                <Button onClick={logout}>logout</Button>
            </div>
            {children}
        </>
    )
}

export default styled(Layout)`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    background-color: #1E88E5;
    padding: 10px;
`;

const CenterNavLink = styled(NavLink)`
    align-self: center;
`;