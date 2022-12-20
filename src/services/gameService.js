import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";

import config from "../config.json";
let urlApi= config.apiUrl;
export let liveGames=[];
export let endGames=[];
export let allGames=[];

export const getLiveGames= () => {
    sendApiGetRequest(urlApi + "/get-live-games", (response) => {
        if (response.data.success) {
            liveGames = response.data.gamesObjectList;
        }else {
            liveGames = null;
        }
    })
}

export const getEndGames= async () => {
    sendApiGetRequest(urlApi + "/get-end-games", (response) => {
        if (response.data.success) {
            endGames = response.data.gamesObjectList;

        }else {
            endGames = null;
        }
    })
}

export const addGame= (arrayGamesLive) => {
    sendApiPostRequest(urlApi + "/add-game", arrayGamesLive, (response) => {
        if (response.data.success) {

          return response.data.gamesObjectList;
        }else {
           if (response.data.error) {
               alert(response.data.error);
           }
        }
    })
}

export const getAllGames= () => {
    sendApiGetRequest(urlApi + "/get-all-games", (response) => {
        if (response.data.success) {
            allGames = response.data.gamesObjectList;
        }else {
            allGames = null;
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