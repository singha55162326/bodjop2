import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getCustomer =() => {
    return httpClient.get(server.CUSTOMER_URL);
};

export const getCustomerById = id => {
    return httpClient.get(server.CUSTOMER_URL + `/id/${id}`)
};

export const addCustomer = data =>{
    return httpClient.post(server.CUSTOMER_URL, data)
};

export const deleteCustomer = id =>{
    return httpClient.delete(server.CUSTOMER_URL + `/id/${id}`);
};

export const updateCustomer = data =>{
    return httpClient.put(server.CUSTOMER_URL, data);
};
