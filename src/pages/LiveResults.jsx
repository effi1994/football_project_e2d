import React from 'react';
import LeaguesList from "../components/LeaguesList";

const LiveResults = () => {

    const liveGames = [
        {
            session: 1,
            homeTeam: "team1",
            foreignTeam: "team2",
            goalsForeign: 0,
            goalsHome: 0,
            isLive: true


        },
        {
            session: 2,
            homeTeam: "team3",
            foreignTeam: "team4",
            goalsForeign: 0,
            goalsHome: 1,
            isLive: true


        },
        {
            session: 4,
            homeTeam: "team1",
            foreignTeam: "team4",
            goalsForeign: 1,
            goalsHome: 0,
            isLive: true


        }
    ]

    return (
        <>
            <LeaguesList games={liveGames} mode={"result"}/>
        </>
    );
};

export default LiveResults;