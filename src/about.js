import React from 'react';
import { NavLink } from 'react-router-dom';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to Game of Life!</h1>
                    <p>
                        Conway&apos;s Game of Life (henceforth, ​Life​) is based
                        on a grid system. Every individual location on the grid
                        can be understood as a ​cell​. The game, or simulation,
                        occurs over iterations, or generations​. After a
                        generation, a cell may change from ​living​ or ​dead​
                        based on how many living or dead neighbors it had in a
                        previous iteration. A ​neighbor​ is any immediately
                        adjacent spot on the grid (horizontal, vertical or
                        diagonal). We can understand this more clearly with an
                        example and a clear demonstration of the rules. You are
                        welcome to read about
                    </p>
                    <p>Life has 4 simple rules:</p>
                    <ol>
                        <li>
                            A living cell with less than two living neighbours
                            dies.
                        </li>
                        <li>
                            A living cell with two or three live neighbours
                            lives.
                        </li>
                        <li>
                            A living cell with more than three live neighbours
                            dies.
                        </li>
                        <li>
                            A dead cell with exactly three live neighbours
                            becomes a live cell, as if by reproduction.
                        </li>
                    </ol>
                </div>
                <div>
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
