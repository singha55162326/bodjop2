import httpClient from "@/services/httpClient"
import {server } from "@/services/constants"

export const getEmployee =() => {
    return httpClient.get(server.EMPLOYEE_URL);
};

export const getEmployeeById = id => {
    return httpClient.get(server.EMPLOYEE_URL + `/id/${id}`)
};

export const addEmployee = data =>{
    return httpClient.post(server.EMPLOYEE_URL, data)
};

export const deleteEmployee = id =>{
    return httpClient.delete(server.EMPLOYEE_URL + `/id/${id}`);
};

export const updateEmployee = data =>{
    return httpClient.put(server.EMPLOYEE_URL, data);
};