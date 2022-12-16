import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";
import config from "../config.json";

let urlApi= config.apiUrl;
let teamsName=null;
let teams=[];

export const getTeams= (callback) => {
    sendApiGetRequest(urlApi + "/get-all-teams", (response) => {
        if (response.data.success) {
            teamsName = response.data.teams;
            callback(teamsName);
        }else {
            teamsName = null;
        }
    })
}

export const getTeamsName = () => {
    return teamsName;
}