import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

const ItemValue = ({ className, children, label, unit }) => (
    <div className={className}>
        <Label>{label}</Label>
        <span>{`${children} ${unit ? unit : ""}`}</span>
    </div>
);

ItemValue.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    label: PropTypes.string,
    unit: PropTypes.string,
};

const Label = styled.span`
    font-weight: 600;
`;

export default styled(ItemValue)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;
