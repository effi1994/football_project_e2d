import React from 'react';
import LoginForm from "../components/LoginForm";
import AddGameForm from "../components/AddGameForm";

import {getToken} from "../services/userAtuhService";

const Login = (props) => {


    return (
        <div>
            {
                props.token || getToken() ? <AddGameForm/>: <LoginForm onToken={props.onToken}/>
            }

        </div>
    );
};

export default Login;