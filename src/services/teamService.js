import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";
import config from "../config.json";

let urlApi= config.apiUrl;
let teamsName=[];
export let teams=[];


export const getTeams = () => {
    sendApiGetRequest(urlApi + "/get-all-teams", (response) => {
        if (response.data.success) {
            teams = response.data.teamsObjectList;
            if (teamsName.length ===0){
                teams.forEach(team=>{
                    teamsName.push({nameTeams:team.nameTeams, id:team.id})
                });
            }

            return teams;
        }else {
            teamsName = null;
        }
    })
}


export const getTeamsName = () => {
    return teamsName;
}

export const updateTeams= (teams) => {
    sendApiPostRequest(urlApi + "/update-teams", teams, (response) => {
        if (response.data.success) {

        }else {
            if (response.data.error) {
                alert(response.data.error);
            }
        }
    })
}