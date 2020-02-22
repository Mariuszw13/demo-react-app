import React from 'react';
import styled from 'styled-components'
import Item from "./index";

const List = ({className, items, grid}) => {
    return (
            <div className={className}>
                {items && items.map((item, index) => <Item key={index} {...item} />)}
            </div>
    )
};

export default styled(List)`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`