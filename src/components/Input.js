import React, {Component} from 'react';

class Input extends Component {

    sendMessage = async (e) => {
        this.props.update();
        e.preventDefault();
        this.props.update();
        const message = e.target.elements.namedItem("message").value;
        if (message === "") {
            this.props.update();

        } else {
            e.target.reset();
            this.setState({message: message});
            await fetch("http://localhost:8888/chat/say", {
                body: `name=${this.props.userName}&msg=${message}`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            })
        }
    };

    componentDidMount() {
        this.props.update();
    }

    render() {
        return (
            <div className="input" onSubmit={this.sendMessage.bind(this)}>
                <form target="_blank">
                    <input type="text" name="message" placeholder=" Enter message here and put ENTER"/>
                </form>

            </div>
        );
    }
}

export default Input;
