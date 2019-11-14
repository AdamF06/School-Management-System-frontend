import React, { Component } from 'react';
import './Login.css'
import {
    Rocket,
    Group,
    Chat
} from '../Icon/Icon'
import { Particles } from 'react-particles-js';
import { connect } from 'react-redux';
import Form from './Form';

const particlesPrep = {
    "particles": {
        "number": {
            "value": 150
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__backGround">
                <Particles height="100vh" prams={particlesPrep}/>
                    <img src={require('./logo.png')} alt="icon img"></img>
                    <div className="login__backGround__nav">
                        <ul>
                            <li>
                                <button>
                                    <h4>{Group}</h4>
                                    <h3>About us</h3>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <h4>{Chat}</h4>
                                    <h3>Contact</h3>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <h4>{Rocket}</h4>
                                    <h3>Resource & info</h3>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Form/>
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

export default connect(mapStateToProps, {})(Login);