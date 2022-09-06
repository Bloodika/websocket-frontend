import React, {useState} from 'react';
import {useStompClient, useSubscription} from "react-stomp-hooks";

function AppFunctional(props) {

    const [message, setMessage] = useState("Empty");
    const client = useStompClient();

    useSubscription("/topic/test", () => {
        setMessage(message === "Empty" ? "Not Empty" : "Empty")
    })


    const onSend = () => {
        client.publish({destination: "/app/test", body: "Hahh2"})
    }

    return (
        <div>
            <button style={{backgroundColor: "gray"}} onClick={onSend}>WTF2</button>
            <div>{message}</div>
        </div>
    );
}

export default AppFunctional;
