import React from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Game of Life!</h1>
                <h2>Please enter the width, height, and speed:</h2>
                <MyForm />
            </div>
        );
    }
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            width: 0,
            speed: 0,
            redirect: false,
        };
    }

    _setRedirect = () => {
        this.setState({
            redirect: true,
        });
    };

    _renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={`/app/${this.state.height}/${this.state.width}/${this.state.speed}`}
                />
            );
        }
    };

    _mySubmitHandler = event => {
        event.preventDefault();
        let height = this.state.height;
        let width = this.state.width;
        let speed = this.state.speed;

        if (!Number(height)) {
            alert('Your height must be a number');
            return;
        }
        if (!Number(width)) {
            alert('Your width must be a number');
            return;
        }
        if (!Number(speed)) {
            alert('Your speed must be a number');
            return;
        }
        if (!(height >= 10 && height <= 100 && width >= 10 && width <= 100)) {
            alert('Your height/width must be between 10 and 100 inclusively');
            return;
        }
        if (!(speed >= 50 && speed <= 2000)) {
            alert('Your speed must be between 50ms and 2000ms inclusively');
            return;
        }
        this._setRedirect();
    };

    _myChangeHandler = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    };

    render() {
        return (
            <div>
                <form onSubmit={this._mySubmitHandler}>
                    {this._renderRedirect()}
                    <p>Height:</p>
                    <input
                        type="number"
                        name="height"
                        onChange={this._myChangeHandler}
                    />
                    <p>Width:</p>
                    <input
                        type="number"
                        name="width"
                        onChange={this._myChangeHandler}
                    />
                    <p>Speed:</p>
                    <input
                        type="number"
                        name="speed"
                        onChange={this._myChangeHandler}
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
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
            </div>
        );
    }
}
