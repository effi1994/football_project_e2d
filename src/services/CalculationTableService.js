import {getTeams,teams} from "./teamService";
import {getLiveGames,getEndGames} from "./gameService";
let tableLeague=[];
let tableLeagueLive=[];


export const calculateTableLeague=()=>{
    debugger;
    tableLeague=[];
    let teams=teams;
    teams.forEach(team=>{
        tableLeague.push({
            id:team.id,
            nameTeams:team.nameTeams,
            games:0,
            wins:0,
            draws:0,
            losses:0,
            goalsFor:0,
            goalsAgainst:0,
            goalDifference:0,
            points:0
        })
    });
    let games=getEndGames();
    games.forEach(game=>{
        let indexTeam1=tableLeague.findIndex(team=>team.id===game.idTeam1);
        let indexTeam2=tableLeague.findIndex(team=>team.id===game.idTeam2);
        tableLeague[indexTeam1].games++;
        tableLeague[indexTeam2].games++;
        tableLeague[indexTeam1].goalsFor+=game.goalsTeam1;
        tableLeague[indexTeam2].goalsFor+=game.goalsTeam2;
        tableLeague[indexTeam1].goalsAgainst+=game.goalsTeam2;
        tableLeague[indexTeam2].goalsAgainst+=game.goalsTeam1;
        tableLeague[indexTeam1].goalDifference+=game.goalsTeam1-game.goalsTeam2;
        tableLeague[indexTeam2].goalDifference+=game.goalsTeam2-game.goalsTeam1;
        if(game.goalsTeam1>game.goalsTeam2){
            tableLeague[indexTeam1].wins++;
            tableLeague[indexTeam2].losses++;
            tableLeague[indexTeam1].points+=3;
        }else if(game.goalsTeam1<game.goalsTeam2){
            tableLeague[indexTeam1].losses++;
            tableLeague[indexTeam2].wins++;
            tableLeague[indexTeam2].points+=3;
        }else {
            tableLeague[indexTeam1].draws++;
            tableLeague[indexTeam2].draws++;
            tableLeague[indexTeam1].points+=1;
            tableLeague[indexTeam2].points+=1;
        }
    });
    tableLeague.sort((a,b)=>b.points-a.points);
    tableLeagueLive=tableLeague;
    return tableLeague;
}

