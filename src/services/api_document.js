    import httpClient from "@/services/httpClient"
    import {server } from "@/services/constants"

    export const getDocument =() => {
        return httpClient.get(server.Document_URL);
    };

    export const getDocumentById = id => {
        return httpClient.get(server.Document_URL + `/id/${id}`)
    };

    export const addDocument = data =>{
        return httpClient.post(server.Document_URL, data)
    };

    export const deleteDocument = id =>{
        return httpClient.delete(server.Document_URL + `/id/${id}`);
    };

    export const updateDocument = data =>{
        return httpClient.put(server.Document_URL, data);
    };