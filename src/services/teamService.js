import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";
import config from "../config.json";

let urlApi= config.apiUrl;
let teamsName=null;
let teams=[];

export const getTeams= (callback) => {
    sendApiGetRequest(urlApi + "/get-all-teams", (response) => {
        if (response.data.success) {
            teams = response.data.allTeams;
            teamsName=teams.map(team=>{
                return {
                    nameTeams:team.nameTeams,
                    id:team.id
                }
            });
            callback(teams);
        }else {
            teamsName = null;
        }
    })
}

export const getTeamsName = () => {
    return teamsName;
}