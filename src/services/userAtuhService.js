import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";
import { Cookies } from 'react-cookie';

import config from "../config.json";
let urlApi= config.apiUrl;
let user=null;
const cookies = new Cookies();


export const login = (username, password,callback) => {
    sendApiPostRequest(urlApi + "/log-in", {
        username,
        password
    }, (response) => {
        if (response.data.success) {
            debugger
            user = response.data.userObject;
            cookies.set(config.tokenKey, user.token, { path: '/', expires: new Date(Date.now() + 1000*60*60*24) });
            //localStorage.setItem(config.tokenKey, user.token);
            callback(user.token);
        }else {
         user = null;
        alert("username or password incorrect");
        }
    })
}

export const getToken = () => {
    return cookies.get(config.tokenKey);
    //return localStorage.getItem(config.tokenKey);
}

export const logout = () => {
    cookies.remove(config.tokenKey);
    user = null;
}

export const getUser = (token) => {

    sendApiPostRequest(urlApi + "/get-user-by-token", {token}, (response) => {
        if (response.data.success) {
            user = response.data.userObject;
        }else {
            user = null;
        }
    })
    return user;
}