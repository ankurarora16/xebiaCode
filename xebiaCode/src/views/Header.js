import React, {Component} from 'react';
import PropTypes from "prop-types";
import { logout } from '../actions/authenticationAction';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnMount() {
        this.unsubscribe();
    }

    logout(){
        const {store} = this.context;
        store.dispatch(logout());
        this.props.history.push("/");
    }

    render() {
        return (
            <header className="row header">
                <div className="logo column">
                    <img alt="" src="images/png/star_wars_logo_PNG29.png"></img>
                </div>
                <div className="column align-right page-status-container">
                    <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                </div>
            </header>
        );
    }
}

Header.contextTypes = {
    store: PropTypes.object
};

export default Header;