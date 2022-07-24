import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getCar =() => {
    return httpClient.get(server.CAR_URL);
};

export const getCarById = id => {
    return httpClient.get(server.CAR_URL + `/id/${id}`)
};

export const addCar = data =>{
    return httpClient.post(server.CAR_URL, data)
};

export const deleteCar = id =>{
    return httpClient.delete(server.CAR_URL + `/id/${id}`);
};

export const updateCar = data =>{
    return httpClient.put(server.CAR_URL, data);
};
