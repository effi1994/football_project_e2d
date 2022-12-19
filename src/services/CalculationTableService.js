import {teams} from "./teamService";
import {endGames,liveGames} from "./gameService";
let tableLeagueEnd=[];
let tableLeagueLive=[];


export const calculateTableLeague=  ()=>{
  let  tableLeague=[];
    let teams1=teams;
    teams1.forEach(team=>{
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
  console.log(teams1)
    let games=endGames;
  console.log(games)

    games.forEach(game=>{
        let indexTeam1=tableLeague.findIndex(team=>team.nameTeams===game.homeTeam);
        let indexTeam2=tableLeague.findIndex(team=>team.nameTeams===game.foreignTeam);
        tableLeague[indexTeam1].games++;
        tableLeague[indexTeam2].games++;
        tableLeague[indexTeam1].goalsFor+=game.homeScore;
        tableLeague[indexTeam2].goalsFor+=game.foreignScore;
        tableLeague[indexTeam1].goalsAgainst+=game.foreignScore;
        tableLeague[indexTeam2].goalsAgainst+=game.homeScore;
        tableLeague[indexTeam1].goalDifference+=game.homeScore-game.foreignScore;
        tableLeague[indexTeam2].goalDifference+=game.foreignScore-game.homeScore;
        if(game.homeScore>game.foreignScore){
            tableLeague[indexTeam1].wins++;
            tableLeague[indexTeam2].losses++;
            tableLeague[indexTeam1].points+=3;
        }else if(game.homeScore<game.foreignScore){
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
    tableLeagueEnd=tableLeague;
    return tableLeague;
}

export const calculateTableLeagueLive=  ()=>{
    let  tableLeague=[];
    let teams1=teams;
    teams1.forEach(team=>{
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
    let games=liveGames;
    games.forEach(game=>{
        let indexTeam1=tableLeague.findIndex(team=>team.nameTeams===game.homeTeam);
        let indexTeam2=tableLeague.findIndex(team=>team.nameTeams===game.foreignTeam);
        tableLeague[indexTeam1].games++;
        tableLeague[indexTeam2].games++;
        tableLeague[indexTeam1].goalsFor+=game.homeScore;
        tableLeague[indexTeam2].goalsFor+=game.foreignScore;
        tableLeague[indexTeam1].goalsAgainst+=game.foreignScore;
        tableLeague[indexTeam2].goalsAgainst+=game.homeScore;
        tableLeague[indexTeam1].goalDifference+=game.homeScore-game.foreignScore;
        tableLeague[indexTeam2].goalDifference+=game.foreignScore-game.homeScore;
        if(game.homeScore>game.foreignScore){
            tableLeague[indexTeam1].wins++;
            tableLeague[indexTeam2].losses++;
            tableLeague[indexTeam1].points+=3;
        }else if(game.homeScore<game.foreignScore){
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

