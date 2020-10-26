import React from "react";
import { render } from "@testing-library/react";
import FormElement from "./index";

describe("<FormElement />", () => {
    const label = "test label";
    const error = null;
    const controlProps = {};

    let getByText, container;
    beforeEach(() => {
        const utils = render(<FormElement label={label} error={error} controlProps={controlProps} />);
        getByText = utils.getByText;
        container = utils.container;
    });

    it("should render properly and match snapshot", () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should render label", () => {
        expect(getByText(label)).toBeInTheDocument();
    });
});
