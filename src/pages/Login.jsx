import React from 'react';
import LoginForm from "../components/LoginForm";
import AddGameForm from "../components/AddGameForm";
const Login = (props) => {
    return (
        <div>
            {
                props.token ? <AddGameForm/>: <LoginForm onToken={props.onToken}/>
            }

        </div>
    );
};

export default Login;