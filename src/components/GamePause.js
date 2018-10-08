import React from 'react';
import Modal from 'react-modal';
const GamePause = (props) => (
        <Modal isOpen = {props.pause}
         closeTimeoutMS = {150}
         ariaHideApp={false}
        className = "ReactModal__Content" >
        < div className = "ReactModal__score" >
            <span className = "player1-score">Player 1: <b>{props.player1}</b> </span>
            <span className = "player2-score">Player 2: <b>{props.player2}</b></span>
        </div>

        {props.pause && <p className = "modal__body" > {props.pause} </p>}

        <div className = "ReactModal__game-options">
            <button onClick={()=>{props.togglePause()}}> Resume Game </button>
            <button onClick = {() => {props.newSession()}}> Start New Session (loose your points) </button>
            <button onClick = {() => {props.newGame()}}> Start New Game (keep your points) </button>
        </div>
        </Modal>
        );
export default GamePause;
