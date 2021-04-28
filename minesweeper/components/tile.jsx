import React from "react";

class Tile extends React.Component{
    constructor(props){
        super(props)
        this.addClassNames = this.addClassNames.bind(this);
        this.addInnerContent = this.addInnerContent.bind(this);
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

    addInnerContent() {
        let numBombs = 0;
        if(this.props.tile.bombed){
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
            <div className={this.addClassNames()}>{this.addInnerContent()}</div>
        )
    }
}

export default Tile;