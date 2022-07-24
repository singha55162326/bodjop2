import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getOrder =() => {
    return httpClient.get(server.ORDER_URL);
};

export const getOrderById = id => {
    return httpClient.get(server.ORDER_URL + `/id/${id}`)
};

export const addOrder = data =>{
    return httpClient.post(server.ORDER_URL, data)
};

export const deleteOrder = id =>{
    return httpClient.delete(server.ORDER_URL + `/id/${id}`);
};

export const updateOrder = data =>{
    return httpClient.put(server.ORDER_URL, data);
};