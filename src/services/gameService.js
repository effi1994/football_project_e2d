import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";

import config from "../config.json";
let urlApi= config.apiUrl;
let liveGames=[];
let endGames=[];

export const getLiveGames= (callback) => {
    sendApiGetRequest(urlApi + "/get-live-games", (response) => {
        if (response.data.success) {
            liveGames = response.data.liveGames;
            callback(liveGames);
        }else {
            liveGames = null;
        }
    })
}

export const getEndGames= (callback) => {
    sendApiGetRequest(urlApi + "/get-end-games", (response) => {
        if (response.data.success) {
            endGames = response.data.endGames;
            callback(endGames);
        }else {
            endGames = null;
        }
    })
}

export const addGame= (arrayGamesLive) => {
    sendApiPostRequest(urlApi + "/add-game", arrayGamesLive, (response) => {
        if (response.data.success) {

        }else {
           if (response.data.error) {
               alert(response.data.error);
           }
        }
    })
}

export const updateGame= (gameLive) => {
    sendApiPostRequest(urlApi + "/update-game", gameLive, (response) => {
        if (response.data.success) {

        }else {
            if (response.data.error) {
                alert(response.data.error);
            }
        }
    })
}

export const  updateEndGames =(arrayGamesLive)=>{
    sendApiPostRequest(urlApi + "/end-games", arrayGamesLive, (response) => {
        if (response.data.success) {

        }else {
            if (response.data.error) {
                alert(response.data.error);
            }
        }
    })
}