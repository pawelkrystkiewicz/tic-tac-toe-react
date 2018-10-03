import React from 'react';

class Settings extends React.Component {
    render() {
        return(
    <div className = "game-options" id = "game-options" >
          <button id = "human"> Play against another human </button> 
          <button > Play against script </button>
    </div>);
    }
}

export default Settings;