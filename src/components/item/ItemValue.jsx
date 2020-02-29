import React from "react";
import styled from "styled-components";

const ItemValue = ({ className, children, label, unit }) => (
    <div className={className}>
        <Label>{label}</Label>
        <span>{`${children} ${unit ? unit : ""}`}</span>
    </div>
);

const Label = styled.span`
    font-weight: 600;
`;

export default styled(ItemValue)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;
