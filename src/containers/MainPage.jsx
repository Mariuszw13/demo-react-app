import React, {useState, useEffect} from 'react';
import {getItems} from "../services";
import {useCookies} from "react-cookie";
import List from "../components/item/list";
import styled from "styled-components";


const MainPage = ({ className}) => {
    const [items, setItems] = useState([]);
    const [cookie,] = useCookies(['authToken']);

    useEffect(() => {
        getItems(setItems, () => null, cookie);
    }, [cookie]);

    return <div className={className}>
        <List items={items}/>
    </div>
}

export default styled(MainPage)`
    padding: 10px 10%;
`;