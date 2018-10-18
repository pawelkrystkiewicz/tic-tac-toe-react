import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={props.showSettings}
    onRequestClose={props.handleButton}
    closeTimeoutMS={150}
    ariaHideApp={false}
    className="ReactModal__Content"
  >
    <div className="ReactModal__score">
      <span className="player1-score">
        Player 1: <b>{props.player1}</b>{" "}
      </span>
      <span className="player2-score">
        Player 2: <b>{props.player2}</b>
      </span>
    </div>
    <div className="ReactModal__msg">{props.message}</div>

    {props.showSettings && (
      <p className="modal__body"> {props.showSettings} </p>
    )}

    <div className="ReactModal__game-options">
      <label>
        <input
          type="checkbox"
          name="game-mode"
          onChange={() => {
            props.handleCheckbox("human");
          }}
          checked={props.checkboxHuman}
        />
        Play against another human
      </label>
      <label>
        <input
          type="checkbox"
          name="game-mode"
          onChange={() => {
            props.handleCheckbox("npc");
          }}
          checked={props.checkboxScript}
        />
        Play against script
      </label>
      <button
        onClick={() => {
          props.restart();
        }}
        //   disabled={(props.checkboxHuman && props.checkboxScript) && !(props.checkboxHuman && props.checkboxScript) }
      >
        Start game
      </button>
    </div>
  </Modal>
);
export default OptionModal;
