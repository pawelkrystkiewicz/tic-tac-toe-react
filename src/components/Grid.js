import React from 'react';
// import {markO} from '../images/O.svg';
// import {markX} from '../images/X.svg';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameGrid: this.props.gameGrid,
            score1: [],
            score2: [],
            tileMarker: 'O',
            lockClick: false,
            gameMsg: this.props.message
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
        ];
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
        let player1Score=this.state.score1
        let player2Score=this.state.score2
        let message=this.gameMsg
            if (this.findCharsFunction(player1Score) && this.findCharsFunction(player2Score)) {
                message = "tie"
            } else if (this.findCharsFunction(player2Score)) {
                message = "player 2"
            } else if (this.findCharsFunction(player1Score)) {
                message = "player 1"
            } else if (player1Score.length>4||player2Score.length>4) {
                message="tie"
            }
            this.setState({
                gameMsg: message
                })
    }

    clickHandlerFunction(index) {
        let newGameGrid = this.state.gameGrid
        let e = Number(index)

        let player1Score = this.state.score1
        let player2Score = this.state.score2

        let marker=this.state.tileMarker

        if (newGameGrid[e]===null) {
            if (marker === 'X') {
            marker = 'O'
            player2Score.push(e)
            }
            else if (marker === 'O')
            {
            marker='X'
            player1Score.push(e)
            }

            newGameGrid[e] = marker
            this.checkForWinnerFunction()
            this.setState({
                gameGrid: newGameGrid,
                score1: player1Score,
                tileMarker: marker,
                lockClick: !this.state.lockClick
            })
        }
    }

    render() {
         let tileClass = ["grid__panel"];
                 if (this.state.lockClick) {
                     tileClass.push('prevent-click');
                 }
        const Tile = this.state.gameGrid.map(
            (tile, index) =>
            <div className = {tileClass.join(' ')}
            key = {index}
            onClick = { () => this.clickHandlerFunction(index)}>
            {tile} </div>
        )

        return (

        <div className = "grid-container">
            {Tile}
            </div>
        );
    }
}

export default Grid;