import React from 'react';

class Message extends React.Component {
      constructor(props) {
              super(props);
              this.state = {
                  message:this.props.message
              }
            }
    render() {
        return <div className = "msg" id = "msg" >{this.state.message}</div>
    }
}

export default Message;
