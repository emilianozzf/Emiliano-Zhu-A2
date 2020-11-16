/* eslint-disable react/prop-types */
import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';

export default class Buttons extends React.Component {
    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button
                        className="btn btn-default"
                        onClick={this.props.startButton}>
                        Start
                    </button>
                    <button
                        className="btn btn-default"
                        onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button
                        className="btn btn-default"
                        onClick={this.props.resetButton}>
                        Reset
                    </button>
                </ButtonToolbar>
            </div>
        );
    }
}
