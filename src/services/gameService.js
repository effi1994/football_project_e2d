import {sendApiGetRequest, sendApiPostRequest,sendApiPostRequestWithBody} from "./ApiRequests";

import config from "../config.json";
let urlApi= config.apiUrl;
export let liveGamesInDb=[];
export let endGames=[];
export let allGames=[];

export const getLiveGames= () => {
    sendApiGetRequest(urlApi + "/get-live-games", (response) => {
        if (response.data.success) {
            liveGamesInDb = response.data.gamesObjectList;
        }else {
            liveGamesInDb = null;
        }
    })
    return liveGamesInDb;
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

export const addGame = (arrayGamesLive) => {
    sendApiPostRequestWithBody(urlApi + "add-games", arrayGamesLive, (response) => {
        if (response.data.success) {
           alert("success add games");
        }else {
           if (response.data.errorCode === 1) {
               alert("you can add game with same name team");
           }else if (response.data.errorCode === 2) {
               alert("you can add game is exist in db");
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

export const updateGameLive= (gameLive) => {
    sendApiPostRequest(urlApi + "/update-game", gameLive, (response) => {
        if (response.data.success) {
            alert("success update game");
        }else {
            if (response.data.error) {
                alert(response.data.error);
            }
        }
    })
}

export const  updateEndGames =(arrayGamesLive)=>{
    sendApiPostRequestWithBody(urlApi + "/end-games", arrayGamesLive, (response) => {
        if (response.data.success) {
            alert("success update end games");
        }else {
            if (response.data.error) {
                alert(response.data.error);
            }
        }
    })
}