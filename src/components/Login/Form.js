import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.css'
import {
    Gmail,
    Facebook,
    Ins
} from '../Icon/Icon'
import {
    authenticate
} from '../../actions'
import { withRouter } from "react-router";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            panel: "left",
            login_email: '',
            login_password: '',
            login_success: ''
        }
    }


    switchToSignin() {
        this.setState({
            panel: "right"
        })
    }
    switchToSignup() {
        this.setState({
            panel: "left"
        })

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signIn = (e) => {
        e.preventDefault();
        const { authenticate } = this.props;
        const { login_email, login_password } = this.state
        authenticate(login_email, login_password)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            const { history, user_status } = this.props;
            history.push('/dashboard');

            if (user_status === "online") {
            } else {
                this.setState({
                    login_success: false
                })
            }
        }
    }
    // how to fix this? 'Mixmun update'
    // componentDidMount(){
    //     const {history}= this.props
    //     if(window.localStorage.token){
    //         history.push('/dashboard');
    //     }
    // }
    render() {
        const { panel } = this.state
        return (
            <div className={`login__form ${panel === "left" ? "" : "right-panel-active"}`} >
                <div className="login__form__signup formContainer signupContainer">
                    <form >
                        <h1>Create Account</h1>
                        <ul className="login__form__register__social socialContainer">
                            <li><button className="social">{Facebook} </button></li>
                            <li><button className="social">{Gmail} </button></li>
                            <li><button className="social">{Ins} </button></li>
                        </ul>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="act">Sign Up</button>
                    </form>
                </div>

                <div className="login__form__signin formContainer signinContainer">
                    <form>
                        <h1>Sign in</h1>
                        <ul className="login__form__signin__social socialContainer">
                            <li><button className="social">{Facebook} </button></li>
                            <li><button className="social">{Gmail} </button></li>
                            <li><button className="social">{Ins} </button></li>
                        </ul>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="login_email" onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="login_password" onChange={this.handleChange} />
                        <p >Forgot your password?</p>
                        <button className="act" onClick={this.signIn}>Sign In</button>
                    </form>
                </div>
                <div className="login__form__overlayContainer">
                    <div className="overlay">
                        <div className="overlay__panel overlay__left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="act act__ghost" id="signIn"
                                onClick={(e) => { this.switchToSignup() }}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay__panel overlay__right">
                            <h1>Hello!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="act act__ghost" id="signUp"
                                onClick={(e) => { this.switchToSignin() }}
                            >Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { auth } = state;
    return {
        user_identity: auth.user_identity,
        user_status: auth.user_status,
    };
}

export default connect(mapStateToProps, { authenticate })(withRouter(Form));
