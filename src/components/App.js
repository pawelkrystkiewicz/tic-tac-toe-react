import React, {
  Component
} from 'react';
import Header from './Header'
import Settings from './Settings';
import Score from './Score';
import Grid from './Grid';
import Message from './Message';



class App extends Component {
  constructor() {
    super();
    this.state = {
      gameGrid: Array(9).fill(null),
    }
  }

  render() {
    return ( <div className = "wrapper" >
      <Header />
      <Message message={this.state.message}/>
      <Score player1 = {
        this.state.score1
      }
      player2 = {
        this.state.score2
      }/> <Settings />
      <Grid gameGrid = {
        this.state.gameGrid
      }
       player1 = {
         this.state.score1
       }
       player2 = {
         this.state.score2
       }
       message={this.state.message}
       />
    </div >
    );
  }
}

export default App;