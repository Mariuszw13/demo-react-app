import React from "react";
import { render, waitFor } from "@testing-library/react";
import MainPage from "./MainPage";
import * as services from "../services";
import { ITEM_TYPE } from "../utils/enums";

describe("<MainPage />", () => {
    const addItemText = "Add new item";
    const data = [
        { id: 1, name: "item one", type: ITEM_TYPE.FOOD },
        { id: 2, name: "item two", type: ITEM_TYPE.DRINK },
    ];

    jest.spyOn(services, "getItems").mockImplementation((onSuccess) => onSuccess(data));
    jest.spyOn(services, "deleteItem").mockImplementation((onSuccess) => onSuccess());

    it("should render properly and match snapshot", async () => {
        // given
        const { container, getByText } = render(<MainPage />);
        // when
        await waitFor(() => getByText(addItemText));
        // then
        expect(container.firstChild).toMatchSnapshot();
    });

    it("should open modal on button click", async () => {
        // given
        const { getByText, getAllByText } = render(<MainPage />);
        // when
        const button = await waitFor(() => getByText(addItemText));
        button.click();
        // then
        expect(getAllByText(addItemText)).toHaveLength(2);
    });

    it("should render items fetched from api", async () => {
        const { getByText } = render(<MainPage />);
        // when
        await waitFor(() => getByText(addItemText));
        const item1 = getByText(data[0].name);
        const item2 = getByText(data[1].name);
        // then
        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
    });

    it("should remove item on delete button click", async () => {
        // given
        const { queryByText, findAllByText } = render(<MainPage />);
        // when
        const deleteButtons = await findAllByText("Remove");
        const item1DeleteButton = deleteButtons[0];
        item1DeleteButton.click();
        // then
        await waitFor(() => {
            expect(queryByText(data[0].name)).not.toBeInTheDocument()
        })
    })
});
