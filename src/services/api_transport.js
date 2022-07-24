import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getTransport =() => {
    return httpClient.get(server.TRANSPORT_URL);
};

export const getTransportById = id => {
    return httpClient.get(server.TRANSPORT_URL + `/id/${id}`)
};

export const addTransport = data =>{
    return httpClient.post(server.TRANSPORT_URL, data)
};

export const deleteTransport = id =>{
    return httpClient.delete(server.TRANSPORT_URL + `/id/${id}`);
};

export const updateTransport = data =>{
    return httpClient.put(server.TRANSPORT_URL, data);
};