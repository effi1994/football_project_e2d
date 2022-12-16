import React from 'react';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {Button} from "@mui/material";

const StyledButton = (props) => {
    return (
        <Button
            endIcon={props.icon == "+" ? <AddCircleOutlineIcon/> :
                props.icon == "-" ? <RemoveCircleOutlineIcon />  : <ModeEditOutlineOutlinedIcon/>}
            variant={"contained"}
            color={props.color}
            sx={{
                marginRight: 2,
                marginTop: 3,
                borderRadius: 3,
            }}
        >
            {props.text}
        </Button>
    );
};

export default StyledButton;