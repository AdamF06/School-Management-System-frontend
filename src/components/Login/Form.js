import React, { Component } from 'react';
// import axios from 'axios'
// import jwt_decode from 'jwt-decode'
import { connect } from 'react-redux';
import './Form.css'
import {
    Gmail,
    Facebook,
    Ins
} from '../Icon/Icon'
import {
    changeStudentStatus,
    setStudentIdentity,
    getStudentId,
    authenticate,
} from '../../actions'
import { withRouter } from "react-router";

class Form extends Component {
    state = {
        panel: "left",
        login_email: '',
        login_password: '',
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
    //login 
    changeStatus = (token) => {
        const currentStatus = this.props.status === 'offline' ? 'signedin' : 'offline';
        const {_id, identity } = token
        if (identity === 'student') {
            this.props.changeStudentStatus({
                status: currentStatus,
            })
            this.props.setStudentIdentity({
                identity
            })
            this.props.getStudentId({
                _id
            })
        }else{
            // console.log('identity wrong')
            //teacher 
        }
        console.log(this.props)
    }
    
    // signIn = async (e) => {
    //     const { login_email, login_password } = this.state
    //     const { fetchUser } = this.props;
    //     e.preventDefault()
    //     try {
    //         const studentApi_res = fetchUser();

    //         if (studentApi_res.status === 200) {
    //             console.log("success")
    //             const token = jwt_decode(studentApi_res.data.token)
    //             console.log(token)
    //             this.changeStatus(token)
    //             // window.location.href = 'http://localhost:3000/dashboard'

    //         } else {
    //             const teacherApi_res = await axios({
    //                 url: 'http://127.0.0.1:8080/teachers/login',
    //                 method: 'post',
    //                 data: { email: login_email, password: login_password }
    //             })
    //             if (teacherApi_res.status === 200) {
    //                 console.log("success")
    //                 const token = jwt_decode(teacherApi_res.data.token)
    //                 console.log(token)
    //                 this.changeStatus(token)
    //             }
    //         }
    //     } catch (err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //     }
    
    // }

    signIn = (e) => {
        e.preventDefault();
        console.log('triggered');
        console.log(this.props);
        const { authenticate } = this.props;
        authenticate();
        const { history } = this.props;
        history.push('/dashboard');
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
                        <input type="email" placeholder="Email" name="login_email" onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="login_password" onChange={this.handleChange} />
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
function mapStateToProps(state) {
    const { student, auth } = state;
    console.log('=======', auth)
    return {
        identity: student.identity,
        status: student.status,
        _id:student._id
    };
}
export default connect(mapStateToProps, {
    changeStudentStatus,
    setStudentIdentity,
    getStudentId,
    authenticate,
})(withRouter(Form));