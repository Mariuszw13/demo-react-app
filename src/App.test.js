import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
    const { container } = render(<App />);

    it("should render properly and match snapshot", () => {
        expect(container.firstChild).toMatchSnapshot();
    });
});
