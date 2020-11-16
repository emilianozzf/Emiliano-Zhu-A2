/* eslint-disable react/prop-types */
import React from 'react';
import Cell from './cell';

export default class Grid extends React.Component {
    render() {
        const width = this.props.width * 16;
        let rowsArr = [];

        let cellClass = '';
        for (let i = 0; i < this.props.height; i++) {
            for (let j = 0; j < this.props.width; j++) {
                cellClass = this.props.grid[i][j] ? 'cell on' : 'cell off';
                let cellId = i + '_' + j;
                rowsArr.push(
                    <Cell
                        cellClass={cellClass}
                        cellId={cellId}
                        row={i}
                        col={j}
                        invertCell={this.props.invertCell}
                    />
                );
            }
        }

        return (
            <div className="grid" style={{ width: width }}>
                {rowsArr}
            </div>
        );
    }
}
