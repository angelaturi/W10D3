import React from "react";

class Tile extends React.Component{
    constructor(props){
        super(props)
        this.addClassNames = this.addClassNames.bind(this);
        this.addInnerContent = this.addInnerContent.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    addClassNames() {
        const classes = ["tile"];
        if(this.props.tile.flagged) {
            classes.push("flagged");
        }
        if(this.props.tile.explored) {
            classes.push("explored");
        }
        if(this.props.tile.bombed) {
            classes.push("bombed")
        }
        return classes.join(" ");
    }

    handleClick(e) {
        let flagged = e.altKey;
        this.props.updateGame(this.props.tile, flagged);
    }

    addInnerContent() {
        let numBombs = 0;
        if(this.props.tile.bombed && this.props.tile.explored){
            return "💣";
        }
        if(this.props.tile.flagged){
            return "⚑"   
        }
        if(this.props.tile.explored && !this.props.tile.bombed) {
            numBombs = this.props.tile.adjacentBombCount();
        }
        if (numBombs === 0) {
            return "";
        } else {
            return numBombs;
        }
    }

    render() {
        return (
            <div className={this.addClassNames()} onClick={this.handleClick}>{this.addInnerContent()}</div>
        )
    }
}

export default Tile;