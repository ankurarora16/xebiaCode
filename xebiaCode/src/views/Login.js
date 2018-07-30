import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLoader, stopLoader} from "../utils/loaderUtils";
import { loginRequest } from "../actions/authenticationAction";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { store } = this.context;
        if (username && password) {
            if (password === "19BBY" && username === "Luke_Skywalker") {
                let user = { user: "Luke Skywalker", userName: "Luke_Skywalker" }
                store.dispatch(loginRequest(user));
                this.props.history.push("/");
            }
        }
    }

    componentWillMount() {
        startLoader();
        stopLoader();
    }

    render() {
        // const {store} = this.context;
        // const state = store.getState();
        return (
            <div className="container">
                <div className="row">
                    <article className="column">
                        <div className="box-container">
                            <div className="col-md-6 col-md-offset-3">
                                <h2>Login Please</h2>
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (this.state.submitted && !this.state.username ? ' has-error' : '')}>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                                        {this.state.submitted && !this.state.username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                        {this.state.submitted && !this.state.password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </article>
                </div>
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

Login.contextTypes = {
    store: PropTypes.object
};

export default connect(mapStateToProps)(Login);
