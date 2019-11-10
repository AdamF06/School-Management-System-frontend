import React, { Component } from 'react';
import axios from 'axios'
import './Form.css'
import {
    Gmail,
    Facebook,
    Ins
} from '../Icon/Icon'

const form = document.getElementById("container")

class Form extends Component {
    state = {
        panel: "left",
        email:'',
        password:''
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
    signIn = (e) => {
        e.preventDefault()
        axios({
            url: 'http://127.0.0.1:8080/students/login',
            method: 'post',
            data: {
                email: "test@qq.com",
                password: "1234567"
            }
        }).then(res => {
            console.log(res.data)
            if (res.status === 200) {
                console.log("success")
            }
        })
    }

    render() {
        const { panel } = this.state
        return (
            <div className={`login__form ${panel === "left" ? "" : "right-panel-active"}`} >

                <div className="login__form__signup formContainer signupContainer">
                    <form action="#">
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
                    <form action="#">
                        <h1>Sign in</h1>
                        <ul className="login__form__signin__social socialContainer">
                            <li><button className="social">{Facebook} </button></li>
                            <li><button className="social">{Gmail} </button></li>
                            <li><button className="social">{Ins} </button></li>
                        </ul>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
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

export default Form;