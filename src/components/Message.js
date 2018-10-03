import React from 'react';

class Message extends React.Component {
    render() {
        return <div className = "msg" id = "msg" >{this.props.message}</div>
    }
}

export default Message;
