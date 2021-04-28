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
        this.updateGame = this.updateGame.bind(this);
        this.checkGameStatus = this.checkGameStatus.bind(this);
        this.restartGame = this.restartGame.bind(this);
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

    checkGameStatus(){
        if(this.state.board.won()){
            return this.endOfGame("You won!")
        }
        if(this.state.board.lost()){
            return this.endOfGame("You lost :(")
        }
    }

    endOfGame(content){
        this.state.board.grid.map((row, idx) => {
            return row.map((tile, idx2) => {
                if (tile.bombed) {
                    tile.explore();
                    return tile;
                }
            })
        })
        return (
            <div className="modal is-open">
                <div className="modal-screen">
                    
                </div>
                <div className="modal-overlay">
                    <p>{content}</p>
                    <button onClick={this.restartGame}>Play Again</button>
                </div>
            </div>
        )
    }

    restartGame() {
        this.setState({
            board: new Minesweeper.Board(10, 10)
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
                {this.checkGameStatus()}
            </div>
        )
    }
}

export default Game;

