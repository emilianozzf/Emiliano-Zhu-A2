/* eslint-disable react/prop-types */
import React from 'react';

export default class Cell extends React.Component {
    render() {
        return (
            <div
                className={this.props.cellClass}
                id={this.props.id}
                onClick={() => {
                    this.props.invertCell(this.props.row, this.props.col);
                }}
            />
        );
    }
}
