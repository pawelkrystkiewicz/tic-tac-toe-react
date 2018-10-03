import React from 'react';

class Score extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        score1: this.props.score1,
        score2: this.props.score2,
      }
  }
   render() {
    return (
    <div className = "score" id = "score" >
        <p> Player 1: <span className = "player1-matrix" id = "player1-matrix">{this.state.score1}</span></p>
        <p> Player 2: <span className = "player2-matrix" id = "player2-matrix">{this.state.score2}</span></p>
        </div>
    );
    }
}

export default Score;