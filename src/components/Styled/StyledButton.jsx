import React from 'react';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {Button} from "@mui/material";


const StyledButton = (props) => {
    let choseButtonIcon = () => {
        switch (props.icon) {
            case "+":
                return <AddCircleOutlineIcon/>
            case "-":
                return <RemoveCircleOutlineIcon />
            case "/":
                return <ModeEditOutlineOutlinedIcon/>
            case "v":
                return <SaveOutlinedIcon/>
            case "x":
                return <CancelOutlinedIcon/>
        }
    }
    return (
        <Button
            endIcon={
                choseButtonIcon()
            }
            variant={"contained"}
            color={props.color}
            value={props.value}
            sx={props.sx}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
};

export default StyledButton;