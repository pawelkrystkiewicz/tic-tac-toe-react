import React from 'react';

class Score extends React.Component {
   render() {
    return (
    <div className = "score" id = "score" >
        <p> Player 1: <span className = "player1-matrix" id = "player1-matrix">{this.props.player1}</span></p>
        <p> Player 2: <span className = "player2-matrix" id = "player2-matrix">{this.props.player2}</span></p>
        <button onClick={this.props.pause}>Pause game</button>
        </div>
    );
    }
}

export default Score;