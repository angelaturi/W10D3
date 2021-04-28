import React from "react";
import Tile from "./tile";

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.makeRows = this.makeRows.bind(this);
        this.makeTile = this.makeTile.bind(this);
    }

    makeRows(board){
        return (
            board.grid.map( (row, idx) => {
                return (
                    <div key={idx}>{this.makeTile(row)}</div>
                )
            })
        )
    }

    makeTile(row){
        return (
            row.map( (tile, idx) => {
                return(
                    <Tile key={idx} updateGame={this.props.updateGame} tile={tile}/>
                )
            })
        )
    }

    render() {
        return(
            <div className="board">
                {this.makeRows(this.props.board)}
            </div>
        )
    }
}

export default Board;