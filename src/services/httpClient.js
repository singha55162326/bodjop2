import axios from "axios";
import {server, apiUrl, NOT_CONNECT_NETWORK, NETWORK_CONNECTION_MESSSAGE} from "@/services/constants";
import router from "@/router";


const isAbsoluteURlRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async config => {
        if(!isAbsoluteURlRegex.test(config.url)){
            const userToken = localStorage.getItem(server.TOKEN);
            if( userToken) {
                config.headers = {"x-access-token": userToken};
            }
            config.url = apiUrl + "/" + config.url;   
        }
        config.timeout = 10000;
       
        return config;
});

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(JSON.stringify(error, undefined, 2));
         router.push("/");
         if (axios.isCancel(error)) {
            return Promise.reject(error);
         } else if (!error.response) {
            return Promise.reject({
                code: NOT_CONNECT_NETWORK,
                message: NETWORK_CONNECTION_MESSSAGE
            });
         }
            return Promise.reject(error);
    }
);
export default axios;