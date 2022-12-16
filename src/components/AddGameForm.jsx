import React, {useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import StyledButton from "./StyledButton";
import StyledFormControl from "./StyledFormControl";

const AddGameForm = () => {
    let width = window.innerWidth;

    const handleHomeTeamChange = (e) => {
        setGame((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }

    const handleSessionChange = (e) => {/*
        let sessionValue = parseInt(e.target.value, 10) || sessionMinVal;
        if (sessionValue < sessionMinVal) e.target.value = sessionMinVal;*/

        setGame((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }


    const formControlSx = {
        marginLeft: 3
    }

    const sessionMinVal = 1
    const goalsHomeMinVal = 0
    const goalsForeignMinVal = 0


    const [game, setGame] = useState({
        session: 1,
        homeTeam: "",
        foreignTeam: "",
        goalsForeign: 0,
        goalsHome: 0,

    })
    const [session, setSession] = useState(1)
    const [goalsHome, setGoalsHome] = useState(0)
    const [goalsForeign, setGoalsForeign] = useState(0)
    const [homeTeam, setHomeTeam] = useState("a")
    const [foreignTeam, setForeignTeam] = useState("b")

    const [games, setGames] = useState([
        {homeTeam, foreignTeam, session, goalsHome, goalsForeign}
    ]);

    return (
        <div>
            <StyledButton text={"Add game"} color={"warning"} icon={"+"}/>
            <StyledButton text={"Remove game"} color={"error"} icon={"-"}/>
            <StyledButton text={"Edit game"} color={"secondary"} icon={"/"}/>

            <Box display={"flex"}
                       flexDirection={"column"}
                       maxWidth={width-(width*(1/3))}
                       margin={"auto"}
                       justifyContent={"center"}
                       marginTop={5}
                       padding={3}
                       borderRadius={3}
                       boxShadow={'5px 5px 10px #ccc'}
                       sx={{
                           transition: "0.2s ease-in",
                           ":hover": {
                               boxShadow: '5px 5px 20px #ccc'
                           },
                           flexDirection: "row",
                           marginLeft: 0
                       }}
            >
                <StyledFormControl/>
                {/*<FormControl>
                    <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                    <TextField
                    sx={{maxWidth:100}}
                    name={"session"}
                    label="Session"
                    type="number"
                    value={game.session}
                    InputProps={{ inputProps: { min: sessionMinVal } }}
                    onChange={handleSessionChange}
                    />
                </FormControl>*/}

                <FormControl sx={formControlSx}>
                    <InputLabel id="demo-simple-select-helper-label">Home team</InputLabel>
                    <Select sx={{ minWidth: 130}}
                        name={"homeTeam"}
                        label="Home team"
                        value={game.homeTeam}
                        onChange={handleHomeTeamChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={formControlSx}>
                    <InputLabel id="demo-simple-select-helper-label">Foreign team</InputLabel>
                    <Select sx={{ minWidth: 140}}
                            label="Foreign team"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>{games[0].homeTeam}</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={formControlSx}>
                    <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                    <TextField
                        sx={{maxWidth:150}}
                        id="outlined-number"
                        label="Goals to foreign"
                        type="number"
                        value={goalsForeign}
                        InputProps={{ inputProps: { min: goalsForeignMinVal } }}
                        onChange={(e) => {
                            let goalsForeignValue = parseInt(e.target.value, 10) || goalsForeignMinVal;

                            if (goalsForeignValue < 0) goalsForeignValue = 0;

                            setGoalsForeign(goalsForeignValue)
                        }}
                    />
                </FormControl>

                <FormControl sx={formControlSx}>
                    <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                    <TextField
                        sx={{maxWidth:150}}
                        id="outlined-number"
                        label="Goals to home"
                        type="number"
                        value={goalsHome}
                        InputProps={{ inputProps: { min: goalsHomeMinVal } }}
                        onChange={(e) => {
                            let goalsHomeValue = parseInt(e.target.value, 10) || goalsHomeMinVal;

                            if (goalsHomeValue < goalsHomeMinVal) goalsHomeValue = goalsHomeMinVal;

                            setGoalsHome(goalsHomeValue);
                        }}
                    />
                </FormControl>

            </Box>
        </div>
    );
};

export default AddGameForm;