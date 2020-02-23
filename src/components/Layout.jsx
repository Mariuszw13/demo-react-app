import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Layout = ({className, children}) => {
    const history = useHistory();
    const [, , removeCookie] = useCookies(['authToken']);

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
                <AppTitle>Web App</AppTitle>
                <Button onClick={logout} variant="secondary" size="sm">Log out</Button>
            </div>
            {children}
        </>
    )
};

const CenterNavLink = styled(NavLink)`
    color: white;
    align-self: center;
    
    :hover {
        color: coral;
    }
`;

const AppTitle = styled.h1`
    color: white;
`;

const StyledLayout = styled(Layout)`
    display: flex;
    justify-content: space-between;
    background-color: #1E88E5;
    padding: 10px;
`;

export const withLayout = (Component) => () => <StyledLayout><Component/></StyledLayout>;