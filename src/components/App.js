import React, {Component} from 'react';
import Header from './Header'
import Score from './Score';
import Grid from './Grid';
import Message from './Message';
import Footer from './Footer';
import Modal from './Modal';
import GamePause from './GamePause';



class App extends Component {
  constructor() {
    super();
    this.state = {
      gameGrid: Array(9).fill(null),
      score1: [],
      score2: [],
      tileMarker: 'O',
      lockClick: true,
      message: 'Select game mode',
      showSettings: true,
      pause: false,
      gameMode: '',
      player1: 0,
      player2: 0,
    }
  }

  restartGameFunction=(mode = 'npc') =>{
    this.setState({
      gameGrid: Array(9).fill(null),
      score1: [],
      score2: [],
      tileMarker: 'O',
      lockClick: false,
      message: 'Your move Player 1',
      gameMode: mode,
      showSettings: false,
    })
  }
  nextMoveFunction() {
    for (let i = 0; i < this.state.gameGrid.length; i++)
      if (this.state.gameGrid[i] === null) {
        return i;
      }
  }
  //FUNCTION CHECKING IF WIN HAS BEEN ACHIEVED
  findCharsFunction(source) {
    const condition = [
      [0, 1, 2], //horizontals
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], //verticals
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], //diagonals
      [2, 4, 6]
    ]
    //condition[] is 2D array, loop through every element
    for (let k = 0; k < condition.length; k++) {
      //moving on to next condition, clear count
      let isFound = 0;
      //loop through every single element in condition[] array
      for (let j = 0; j < source.length; j++) {
        //check if source[] includes any single element from condition sub array[]
        if (source.includes(condition[k][j])) {
          //we are looking from 3 matches for win so increment value if true:
          isFound++;
          if (isFound === 3) { //if found 3 matches it's a win, function
            return true
          }
        }
      }
    }
    return false //if previous condition wasn't caught as true then there is no match, return case false
  }
  checkForWinnerFunction() {
    if (this.findCharsFunction(this.state.score1) && this.findCharsFunction(this.state.score2)) {
      this.gameEndWithFunction("tie")
    } else if (this.findCharsFunction(this.state.score2)) {
      this.gameEndWithFunction("player 2")
    } else if (this.findCharsFunction(this.state.score1)) {
      this.gameEndWithFunction("player 1")
    } else if (this.state.score1.length > 4 || this.state.score2.length > 4) {
      this.gameEndWithFunction("tie")
    }
  }

  gameEndWithFunction(arg) {
    let msg = this.state.message
    let points1 = this.state.player1
    let points2 = this.state.player2

    switch (arg) {
      case "tie":
        msg = `It's a TIE. Press button to start a new game.`
        points1++;
        points2++;
        break;
      case "player 1":
        points1++;
        msg = `${arg.toUpperCase()} has won!
        Press button to start a new game.`
        break;
      case "player 2":
        points2++;
        msg = `${arg.toUpperCase()} has won!
        Press button to start a new game.`
        break;
      default:
        break;
    }

    this.setState({
      message: msg,
      lockClick: true,
      player1: points1,
      player2: points2,
      showSettings: true   })
  }

  clickHandlerFunction=(index)=> {

    let e = Number(index)
    let newGameGrid = this.state.gameGrid;
    let player1Score = this.state.score1;
    let player2Score = this.state.score2;
    let marker = this.state.tileMarker;
    let msg = this.state.message

    if (newGameGrid[e] === null) {
      if (marker === 'O') {
        marker = 'X'
        player1Score.push(e)
        msg = `Your move Player 2`
      } else if (marker === 'X' && this.state.gameMode === "human") {
        marker = 'O'
        player2Score.push(e)
        msg = `Your move Player 1`
      }
      newGameGrid[e] = marker
    }

    if (this.state.gameMode === "npc") {

      if (player1Score.length > player2Score.length) {
        marker = 'O'
        player2Score.push(this.nextMoveFunction())
        newGameGrid[this.nextMoveFunction()] = marker
        msg = `Your move Player 1`
      }
    }
    this.setState({
      gameGrid: newGameGrid,
      score1: player1Score,
      score2: player2Score,
      tileMarker: marker,
      message: msg,

    });
    this.checkForWinnerFunction()
  }

  togglePauseFunction = () => {
      this.setState({pause: !this.state.pause});
  }

  startNewGameSessionFunction=()=>{
      this.setState({
        pause: false,
        gameGrid: Array(9).fill(null),
        score1: [],
        score2: [],
        tileMarker: 'O',
        lockClick: false,
        showSettings: true,
        player1: 0,
        player2: 0,

      });
  }
  startNewGameFunction=()=>{
      this.setState({
        pause: false,
        showSettings: true
      });
  }

  render() {
        return (
          <div className = "wrapper">
          <Modal
		      showSettings = {this.state.showSettings}
		      restart = {this.restartGameFunction}
          message = {this.state.message}
          player1={this.state.player1}
          player2={this.state.player2}/>
          <GamePause
		      pause = {this.state.pause}
          togglePause= {this.togglePauseFunction}
          newSession = {this.startNewGameSessionFunction}
          newGame={this.startNewGameFunction}
          player1={this.state.player1}
          player2={this.state.player2}/>
          <Header/>
          <Message
          message = {this.state.message}/>
          <Score
          player1={this.state.player1}
          player2={this.state.player2}
          pause={this.togglePauseFunction}/>
          <Grid
          lockClick = {this.state.lockClick}
          gameGrid = {this.state.gameGrid}
          click = {this.clickHandlerFunction}/>
          <Footer/>
          </div >
        );

    }

}

export default App;