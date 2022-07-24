import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getOil =() => {
    return httpClient.get(server.OIL_URL);
};

export const getOilById = id => {
    return httpClient.get(server.OIL_URL + `/id/${id}`)
};

export const addOil = data =>{
    return httpClient.post(server.OIL_URL, data)
};

export const deleteOil = id =>{
    return httpClient.delete(server.OIL_URL + `/id/${id}`);
};

export const updateOil = data =>{
    return httpClient.put(server.OIL_URL, data);
};
