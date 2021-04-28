import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board";

class Game extends React.Component {
    constructor(props) {
        super(props)
        // const board =
        this.state = {
            board: new Minesweeper.Board(10, 10)
        }
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(tile, flagged) {
        if(flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({
            board: this.state.board
        })

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Minesweeper</h1>
                    <p>Click to explore a tile</p> 
                    <p>Alt+click to flag a tile.</p>
                </div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;

