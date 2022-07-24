import httpClient from "@/services/httpClient";
import {server} from "@/services/constants";
import router from "@/router";
import * as customerapi from "@/services/api_customer";
import * as transportapi from "@/services/api_transport";
import * as employeeapi from "@/services/api_employee"
import * as documentapi from "@/services/api_document"
import * as orderapi from "@/services/api_order"
import * as priceapi from "@/services/api_price"
import * as carapi from "@/services/api_car"
import * as saleapi from "@/services/api_sale"
import * as oilapi from "@/services/api_oil"
const isLoggedIn = () => {
    let token = localStorage.getItem(server.TOKEN_KEY);
    return token != null;
}

const login = async values => {

    

   

    
    let result = await httpClient.post(server.LOGIN_URL, values);
    if (result.data.result == "ok") {
        let message = result.data.message;
        message = JSON.parse(message);
        localStorage.setItem("role", message.role)
        localStorage.setItem(server.USERNAME, values.username);
        localStorage.setItem(server.TOKEN_KEY, result.data.token);
        router.push("/customer");
        return true;
    } else {
        return false;
    }
    
}

    
    

    const logoff = () => {
     localStorage.removeItem(server.TOKEN_KEY);
     router.push("/login");
    };
    const register = async (values) => {
        let result = await httpClient.post(server.REGISTER_URL, values);
        if (result.data.result == "ok") {
            router.go(-1);
        } else {
            alert(JSON.stringify(result));
        }
    }       
    

   export default {
    isLoggedIn,
    login,
    logoff,
    register,
    ...customerapi,
    ...transportapi,
    ...employeeapi,
    ...documentapi,
    ...orderapi,
    ...priceapi,
    ...carapi,
    ...saleapi,
    ...oilapi
    
   
   };