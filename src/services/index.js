import axios from 'axios'
import {noop} from "../utils";

const instance = axios.create({baseURL: "https://my-json-server.typicode.com/Mariuszw13/db-mock"});

export const tryLogin = async (credentials, onSuccess, onFailure = noop) => {
    try {
        const response = await instance.get("/auth", credentials);
        const token = response.data.token;
        onSuccess(token);
    } catch (e) {
        console.log(e);
        onFailure();
    }
};

export const getItems = async (onSuccess, token, onFailure = noop) => {
    try {
        const config = {headers: {"X-Token": token}};
        const response = await instance.get("/items", config);
        onSuccess(response.data);
    } catch (e) {
        console.log(e);
        onFailure();
    }
};

export const deleteItem = async (onSuccess, token, id, onFailure = noop) => {
    try {
        const config = {headers: {"X-Token": token}};
        const response = await instance.delete(`/items/${id}`, config);
        onSuccess(response.data);
    } catch (e) {
        console.log(e);
        onFailure()
    }
};

export const addItem = async (onSuccess, token, newItem, onFailure = noop) => {
    try {
        const config = {headers: {"X-Token": token}};
        const response = await instance.post("/items", newItem, config);
        onSuccess(response.data);
    } catch (e) {
        console.log(e);
        onFailure()
    }
};