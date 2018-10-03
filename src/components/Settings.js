import React from 'react';

class Settings extends React.Component {
    render() {
        return(
    <div className = "game-options" id = "game-options" >
          <button onClick={()=>{this.props.restart("human")}}> Play against another human </button> 
          <button
          onClick = {() => {this.props.restart()}}
          >
          Play against script </button>
    </div>);
    }
}

export default Settings;