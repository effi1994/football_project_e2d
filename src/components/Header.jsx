import React from 'react';
import {AppBar, Box, Button, IconButton, List, Toolbar, Tooltip} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const links = [
    {titlePage: "Live results", path: "/"},
    {titlePage: "League table", path: "/league-table"},
    {titlePage: "League table live", path: "/league-table-live"},
    {titlePage: "Login", path: "/login"}
]

const buttonSX = {
    margin: "0 0 0 15px",
    transition: "0.2s ease-in",
    "&:hover": {
        backgroundColor:"rgba(133, 127, 255, 0.36)"
    }
}

const Header = (props) => {

    const navigate = useNavigate();

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position={"static"}>
                    <Toolbar>
                        <List sx={{display: "flex", margin: "0 0 0 0", width: "100%"}}>
                            {links.map(({titlePage, path}) => (
                                <Button  component={NavLink}
                                         to={path}
                                         key={path}
                                         sx={buttonSX}
                                         color={props.path==path ? "warning" : "inherit"}
                                         variant="text"
                                >
                                    {titlePage}
                                </Button>
                            ))}

                            {/* to do: onclick*/}
                           <span style={{alignItems:"center", marginLeft:100}}>
                                <Tooltip title={"Go back"}>
                                <IconButton onClick={() => navigate(-1)}>
                                    <ArrowBackOutlinedIcon/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={"Go forward"}>
                                <IconButton onclick={() => navigate(1)}>
                                    <ArrowForwardOutlinedIcon/>
                                </IconButton>
                            </Tooltip>
                           </span>
                        </List>
                        <span sx={{marginRight:0}}>
                                     <img src={"/football_ball_jwo7871eemc0.svg"}
                                          width={25} height={25}
                                     />
                            </span>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;