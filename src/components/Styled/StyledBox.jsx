import React, {useEffect, useState} from 'react';
import {Box, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField, Tooltip} from "@mui/material";
import StyledButton from "./StyledButton";
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import VideogameAssetOffRoundedIcon from '@mui/icons-material/VideogameAssetOffRounded';
import {objectIsEmpty} from "../../utilities/utilities";


//

const StyledBox = (props) => {
    let width = window.innerWidth;

    const handleNumFieldChange = (e) => {
        let isNum = /^\d+$/.test(e.target.value);
        if (isNum) {
            setGame((prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            })))
        }
    }


    const handleTextFieldChange = (e) => {
        setGame((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }
    const styledBoxButtonSx={
        marginLeft: 3,
        borderRadius: 3,
        minWidth: 100
    }
    const formControlSx = {
        marginLeft: 3
    }

    const sessionMinVal = 1
    const goalsHomeMinVal = 0
    const goalsForeignMinVal = 0

    //const [game, setGame] = useState(...props.game)

    const initialGame = {
        session: 1,
        homeTeam: "",
        foreignTeam: "",
        goalsForeign: 0,
        goalsHome: 0,
        isLive: true


    }


    const [game, setGame] = useState(initialGame)

    const handleCheckBoxChange = (e) => {
        setGame((prevState => ({
            ...prevState,
            isLive: !game.isLive
        })))
    }


    useEffect(() => {
        if (!objectIsEmpty(props.editGame)) {
            setGame(props.editGame)
        }
        else {
            setGame(initialGame)
        }
    }, [props.editGame]);


    const addNewGame = (e) => {
        e.preventDefault()
        const newGame = {
            ...game
        }
        props.create(newGame)
        setGame(initialGame)
    }

    const updateGame = (e) => {
        e.preventDefault()
        const updatedGame = {
            ...game
        }

        props.update(updatedGame)
        setGame(initialGame)

    }

    return (
        <Box display={"flex"}
             flexDirection={"column"}
             maxWidth={width-(width*(1/4))}
             margin={"auto"}
             justifyContent={"center"}
             marginTop={0}
             padding={3}
             boxShadow={'5px 5px 10px #ccc'}
             disabled={true}
             sx={{
                 transition: "0.2s ease-in",
                 ":hover": {
                     boxShadow: '5px 5px 20px #ccc'
                 },
                 flexDirection: "row",
             }}
        >
            <FormControl>
                <InputLabel></InputLabel>
                <TextField
                    disabled={objectIsEmpty(props.editGame) && props.mode!=1}
                    sx={{maxWidth:100}}
                    name={"session"}
                    label="Session"
                    type="number"
                    value={game.session}
                    onChange={handleNumFieldChange}
                    InputProps={{ inputProps: { min: sessionMinVal } }}

                />
            </FormControl>

            <FormControl disabled={objectIsEmpty(props.editGame) && props.mode!=1}
                         sx={formControlSx}>
                <InputLabel>Home team</InputLabel>
                <Select sx={{ minWidth: 130}}
                        name={"homeTeam"}
                        label="Home team"
                        value={game.homeTeam}
                        onChange={handleTextFieldChange}
                >
                    {
                        props.teams.map((team) => {
                            return(
                                <MenuItem
                                    key={team.id}
                                    value={team.name}
                                    disabled={game.foreignTeam==team.name}
                                >
                                    {team.name}
                                </MenuItem>
                            )
                        })
                    }

                </Select>
            </FormControl>


            <FormControl
                disabled={objectIsEmpty(props.editGame) && props.mode!=1}
                sx={formControlSx}>
                <InputLabel>Foreign team</InputLabel>
                <Select sx={{ minWidth: 140}}
                        label="Foreign team"
                        name={"foreignTeam"}
                        value={game.foreignTeam}
                        onChange={handleTextFieldChange}
                >

                    {
                        props.teams.map((team) => {
                            return(
                                <MenuItem
                                    key={team.id}
                                    value={team.name}
                                    disabled={game.homeTeam==team.name}
                                >
                                    {team.name}
                                </MenuItem>
                            )
                        })
                    }

                </Select>
            </FormControl>

            <FormControl
                sx={formControlSx}>
                <InputLabel></InputLabel>
                <TextField
                    disabled={objectIsEmpty(props.editGame) && props.mode!=1}
                    sx={{maxWidth:150}}
                    id="outlined-number"
                    label="Goals to foreign"
                    type="number"
                    name={"goalsForeign"}
                    value={game.goalsForeign}
                    InputProps={{ inputProps: { min: goalsForeignMinVal } }}
                    onChange={handleNumFieldChange}
                />
            </FormControl>

            <FormControl
                sx={formControlSx}>
                <InputLabel></InputLabel>
                <TextField
                    disabled={objectIsEmpty(props.editGame) && props.mode!=1}
                    sx={{maxWidth:150}}
                    id="outlined-number"
                    label="Goals to home"
                    type="number"
                    name={"goalsHome"}
                    value={game.goalsHome}
                    InputProps={{ inputProps: { min: goalsHomeMinVal } }}
                    onChange={handleNumFieldChange}
                />


            </FormControl>

            {
                props.mode != 1&&
                <Tooltip title={game.isLive ? "Mark the game as completed": "Mark the game as in live"}>
                    <Checkbox icon={<VideogameAssetRoundedIcon/>}
                              checkedIcon={<VideogameAssetOffRoundedIcon/>}
                              size={"large"}
                              sx={{marginLeft:"auto"}}
                              value={game.isLive}
                              onChange={handleCheckBoxChange}
                              disabled={objectIsEmpty(props.editGame)}
                              checked={!game.isLive}
                    />
                </Tooltip>
            }

            {
                objectIsEmpty(props.editGame) && props.mode==1 ?
                    <StyledButton disabled={(game.homeTeam == "" || game.foreignTeam == "") }
                                  text={"Add"}
                                  sx={styledBoxButtonSx}
                                  onClick={addNewGame}
                                  icon={"+"}
                                  color={"secondary"}

                    />
                    :
                    <StyledButton disabled={objectIsEmpty(props.editGame)}
                                  text={"Edit"}
                                  sx={styledBoxButtonSx}
                                  onClick={updateGame}
                                  icon={"/"}
                                  color={"info"}
                    />
            }



        </Box>
    );
};

export default StyledBox;