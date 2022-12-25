import React from 'react';
import LoginForm from "../components/LoginForm";
import AddEditGamesPage from "./AddEditGamesPage";
import {getToken} from "../services/userAtuhService";


const Login = (props) => {

    return (
        <div>
            {
                props.token || getToken() ? <AddEditGamesPage/> : <LoginForm onToken={props.onToken}/>
            }

        </div>
    );
};

export default Login;