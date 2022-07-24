import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getPrice =() => {
    return httpClient.get(server.CUSTOMER_URL);
};

export const getPriceById = id => {
    return httpClient.get(server.PRICE_URL + `/id/${id}`)
};

export const addPrice = data =>{
    return httpClient.post(server.PRICE_URL, data)
};

export const deletePrice = id =>{
    return httpClient.delete(server.PRICE_URL + `/id/${id}`);
};

export const updatePrice = data =>{
    return httpClient.put(server.PRICE_URL, data);
};