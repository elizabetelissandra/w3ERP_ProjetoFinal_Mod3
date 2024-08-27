import axios from "axios";


export const axiosProdutos = axios.create({
    baseURL: "http://localhost:3000/products",
});

export const axiosClientes = axios.create({
    baseURL: "http://localhost:3000/customers",
});