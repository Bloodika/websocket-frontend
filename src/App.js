import './App.css';
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Empty"
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.props.stompClient !== undefined) {
            this.props.stompClient.subscribe("/topic/test", this.onMessage)
        }
    }

    onMessage = () => {
        this.setState(prev => ({
            message: (prev.message === "Empty" ? "Not Empty" : "Empty")
        }));
    }

    handleClick = () => {
        this.props.stompClient.publish({destination: "/app/test", body: "Hahh"})
    }


    render() {
        return (
            <div>
                <button style={{backgroundColor: "gray"}} onClick={this.handleClick}>WTF</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default App;
