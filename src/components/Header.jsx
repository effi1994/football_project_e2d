import React from 'react';
import {AppBar, Box, Button, List, ListItem, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

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
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position={"static"}>
                    <Toolbar>
                        <List sx={{display: "flex", margin: "0 0 0 30px"}}>
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
                        </List>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;