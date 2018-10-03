import React from 'react';
class Grid extends React.Component {
    render() {
         let gridClass = ["grid-container"];
                 if (this.props.lockClick) {
                     gridClass.push("prevent-click");
                 }
        const Tile = this.props.gameGrid.map(
            (tile, index) =>
            < div className ='grid__panel' key = {index}
            onClick = {()=>this.props.click(index)}>{tile}</div>
        )
        return (
        <div
        className = {gridClass.join(' ')} >
        {Tile}
        </div>
        );
    }
}

export default Grid;