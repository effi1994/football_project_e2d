import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";
import config from "../config.json";

let urlApi= config.apiUrl;
let teamsName=[];
 export let teams=[];


export const getTeams= () => {
    debugger
    sendApiGetRequest(urlApi + "/get-all-teams", (response) => {
        if (response.data.success) {
            debugger;
            teams = response.data.teamsObjectList;
            teamsName=teams.map(team=>{
                return {
                    nameTeams:team.nameTeams,
                    id:team.id
                }
            });
            console.log(teamsName);
            return teams;
        }else {
            teamsName = null;
        }
    })
}


export const getTeamsName = () => {
    return teamsName;
}