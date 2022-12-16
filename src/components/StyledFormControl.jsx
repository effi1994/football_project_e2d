import React, {useState} from 'react';
import {FormControl, InputLabel, TextField} from "@mui/material";




const StyledFormControl = (props) => {
    const [game, setGame] = useState({
        session: 1,
        homeTeam: "",
        foreignTeam: "",
        goalsForeign: 0,
        goalsHome: 0,

    })

    const handleSessionChange = (e) => {
        let isNum = /^\d+$/.test(e.target.value);
        if (isNum) {
            setGame((prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            })))
        }
    }


    return (

        <FormControl>
            <InputLabel></InputLabel>
            <TextField
                sx={{maxWidth: props.maxWidth}}
                name={props.name}
                label={props.label}
                type="number"
                value={game.session}
                InputProps={{ inputProps: { min: props.minVal } }}
                onChange={handleSessionChange}
            />
        </FormControl>
    );
};

export default StyledFormControl;