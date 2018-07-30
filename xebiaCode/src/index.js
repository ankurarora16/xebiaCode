import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Route, Switch} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import history from "./history";
import getInitialState from "./data/DataHandler";
import { PrivateRoute } from './Components/PrivateRoute';
import Login from './views/Login';
import PlanetDetails from './views/PlanetDetails';


const store = configureStore(getInitialState());
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={PlanetDetails} />
                    <Route exact path="/login" render={(props) => (<Login {...props}/>)}/>
                </Switch>
            </HashRouter>
        </Provider>
        , document.getElementById('root'));