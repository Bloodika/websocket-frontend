import React from 'react';
import App from "./App";
import {useStompClient} from "react-stomp-hooks";
import AppFunctional from "./AppFunctional";

const Login = (props) => {
    const client = useStompClient()

    return (
        <div  style={{margin: "50%", marginTop: "25%"}}>
            <App stompClient={client}/>
            <AppFunctional/>
        </div>
    )

}

export default Login;
