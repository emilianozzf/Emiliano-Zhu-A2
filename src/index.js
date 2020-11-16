import React from 'react';
import { render } from 'react-dom';
import Home from './home';
import App from './app';
import About from './about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

render(
    <Router>
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/app/:height/:width/:speed'} component={App} />
            <Route exact path={'/about'} component={About} />
            <Route render={() => <h1>Not found!</h1>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
