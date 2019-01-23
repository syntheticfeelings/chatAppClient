import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Messages from "./components/Messages";
import UsersOnline from "./components/UsersOnline";
import Input from "./components/Input";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userName: undefined
        };
    }

    updateData = () => {
        fetch('http://localhost:8888/chat/history')
            .then(response => response.json())
            .then(messages => this.setState({messages: messages}));
    }

    loginForm = () => {
        if (this.state.userName === undefined) {
            return (
                <form className="loginForm" onSubmit={this.getLogin.bind(this)}>
                    <h3>Input name:</h3>
                    <input type="text" placeholder="Input user name" name="userNameItem"/>
                    <button>Submit</button>
                </form>
            )
        } else {
            return (
                <div>
                    <Messages messages={this.state.messages}/>
                    <UsersOnline/>
                    <Input update={this.updateData} userName={this.state.userName}/>
                </div>
            )
        }
    };


    getLogin = (e) => {
        const that = this;
        const name = e.target.elements.namedItem("userNameItem").value;
        e.preventDefault();
        fetch("http://localhost:8888/chat/login", {
            body: `name=${name}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
            .then(function (response) {
                if (response.status === 200) {
                    that.setState({userName: name});
                    alert("Your name is : " + that.state.userName)
                } else {
                    alert("Try another name")
                }
            })
    };


    render() {
        return (
            <div className="wrap">
                <Header name={this.state.userName}/>
                <div className="mainForm">{this.loginForm()}</div>

            </div>
        );
    }
}

export default App;
