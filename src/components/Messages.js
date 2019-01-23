import React, {Component} from 'react';

class Messages extends Component {

    componentDidMount() {
        const messageBody = document.getElementById('message1');
        messageBody.scrollTop = messageBody.scrollHeight;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const messageBody = document.getElementById('message1');
        messageBody.scrollTop = messageBody.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const messageBody = document.getElementById('message1');
        messageBody.scrollTop = messageBody.scrollHeight;
    }

    render() {
        return (
            <div className="messages" id="message1">
                {this.props.messages.map(function (mes, id) {
                    return (
                        <div key={id}>
                            <p>{mes.userName} : {mes.message}</p>
                        </div>
                    );
                })}
            </div>

        );
    }
}

export default Messages;
