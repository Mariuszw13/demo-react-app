import axios from 'axios'

const instance = axios.create({baseURL: "https://my-json-server.typicode.com/Mariuszw13/db-mock"});

export const tryLogin = async (credentials, onSuccess, onFailure) => {
    try {
        const response = await instance.get("/auth", credentials);
        console.log(response)
        const token = response.data.token;
        onSuccess(token);
    } catch (e) {
        console.log(e);
        onFailure();
    }
};

export const getItems = async (onSuccess, onFailure, token) => {
    console.log("get items")
    try {
        const config = { headers: {"X-Token": token}};
        const response = await instance.get("/items", config);
        console.log(response)
        onSuccess(response.data);
    } catch (e) {
        console.log(e);
        onFailure();
    }
};