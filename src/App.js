/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import './index.css';
import Grid from './grid';
import Buttons from './buttons';
import { NavLink } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.height = parseInt(props.match.params.height);
        this.width = parseInt(props.match.params.width);
        this.speed = parseInt(props.match.params.speed);

        let grid = [];
        for (let i = 0; i < this.height; i++) {
            let newLine = [];
            for (let j = 0; j < this.width; j++) {
                newLine.push(false);
            }
            grid.push(newLine);
        }
        this.state = {
            generation: 0,
            grid: grid,
        };
    }

    // Resets the grid with randomnized live cells
    resetGrid = () => {
        let gridCopy = arrayClone(this.state.grid);
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }

        this.setState({
            grid: gridCopy,
        });
    };

    // Inverts a cell from live to dead or from dead to live
    invertCell = (row, col) => {
        let gridCopy = arrayClone(this.state.grid);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            grid: gridCopy,
        });
    };

    // Simulates the generations
    nextGeneration = () => {
        let g = this.state.grid;
        let nG = arrayClone(this.state.grid);

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let live_cnt = 0;
                if (i - 1 != -1) if (g[i - 1][j]) live_cnt++;
                if (i - 1 != -1 && j - 1 != -1) if (g[i - 1][j - 1]) live_cnt++;
                if (j - 1 != -1) if (g[i][j - 1]) live_cnt++;
                if (i + 1 < this.height && j - 1 != -1)
                    if (g[i + 1][j - 1]) live_cnt++;
                if (i + 1 < this.height) if (g[i + 1][j]) live_cnt++;
                if (i + 1 < this.height && j + 1 < this.width)
                    if (g[i + 1][j + 1]) live_cnt++;
                if (j + 1 < this.width) if (g[i][j + 1]) live_cnt++;
                if (i - 1 != -1 && j + 1 < this.width)
                    if (g[i - 1][j + 1]) live_cnt++;

                if (g[i][j] && (live_cnt < 2 || live_cnt > 3)) nG[i][j] = false;
                if (!g[i][j] && live_cnt === 3) nG[i][j] = true;
            }
        }
        this.setState({
            grid: nG,
            generation: this.state.generation + 1,
        });
    };

    // Starts the simulation
    start = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.nextGeneration, this.speed);
    };

    // Pauses the simulation
    pause = () => {
        clearInterval(this.intervalId);
    };

    componentDidMount() {
        this.resetGrid();
    }

    render() {
        let liveCount = 0;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.state.grid[i][j]) {
                    liveCount += 1;
                }
            }
        }
        return (
            <div>
                <h1>The Game of Life</h1>
                <h2>Live Count: {liveCount}</h2>
                <Buttons
                    startButton={this.start}
                    pauseButton={this.pause}
                    resetButton={this.resetGrid}
                />
                <Grid
                    grid={this.state.grid}
                    height={this.height}
                    width={this.width}
                    invertCell={this.invertCell}
                />
                <div>
                    <div>
                        <NavLink
                            exact
                            to={'/about'}
                            activeStyle={{
                                color: 'purple',
                                backgroundColor: 'blue',
                            }}>
                            Rules of Game
                        </NavLink>
                    </div>
                    <NavLink
                        exact
                        to={'/home'}
                        activeStyle={{
                            color: 'purple',
                            backgroundColor: 'blue',
                        }}>
                        Home Page
                    </NavLink>
                </div>
            </div>
        );
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}
