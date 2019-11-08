import React, { Component } from 'react';
import './profile.css'
export default class ChangePassword extends Component {
    state = {}
    render() {
        return (
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>
            {/* <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .container{\n        padding: 0;\n        margin: 0;\n        width: 1100px;\n        height: 850px;\n        overflow: hidden;\n        float: right;\n        background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=197704580,2183715727&fm=26&gp=0.jpg');\n        background-size: 100%;\n\n    }\n\n    .welcome{\n        padding: 0;\n        margin: 0;\n        height: 50px;\n        background-color:rgba(255, 255, 255, 0.938);\n        font-size: 1.5rem;\n        line-height: 50px;\n        text-indent: 2rem;\n    }\n    .portrait{\n        margin-top: 2rem;\n        margin-left: 2rem;\n        height: 300px;\n        width: 260px;\n        float: left;\n        background-color: pink;\n        font-size: 1rem;\n    }\n    a{\n        color: black;\n        padding-left: 4rem;\n    }\n    .basic_info{\n        margin-top:2rem;\n        margin-right:2rem;\n        width: 680px;\n        height: 390px;\n        background-color: #fff;\n        float: right;\n        background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=197704580,2183715727&fm=26&gp=0.jpg');\n        background-size: 100%;\n    }\n    .account_info{\n        margin-top: 2rem;\n        margin-right:2rem;\n        width: 680px;\n        height: 320px;\n        background-color: #fff;\n        float: right;\n        background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=197704580,2183715727&fm=26&gp=0.jpg');\n        background-size: 100%;\n    }\n    p{\n        text-indent: 0.5rem;\n    }\n    input{\n        margin: 1rem 1rem;\n    }\n    label{\n        display:inline-block;\n        width:110px;;\n    }\n   .basic_info button{\n        float: right;\n        margin-right: 2rem;\n    }\n    .basic_info, .account_info{\n        border-radius: 3px;\n    }\n    .pwd{\n        font-size: 1.2rem;\n    }\n    " }} /> */}
            <div className="container">
              <div className="welcome">Welcome : "XXX", Log on at: (Current time)</div>
              {/* <div className="portrait" /> */}
              <div className="changePassword">
                <form >
                <p >Change Your Password Here </p>
                <hr/>
                <label>Enter your old password : </label>
                <br/>
                <input type="password"  id="oldPassword" size = '35' />
                <br/>
                <label>Enter your new password : </label>
                <br/>
                <input type="password"  id="newPassword" size = '35' minLength='8' required />
                <br/>
                <label>Reenter you new password again : </label>
                <br/>
                <input type="password"  id="newPassword" size = '35' minLength='8' required  />
                <br/>
                <button>Change Password</button>
                <button>Cancel</button>
                </form>

                <div >
                <br/>
                <div className='passwordRule'>
                <p className ="rule">Password Changing Rule</p>
                <hr/>
                <p>1. At least 8 characters</p>
                <p>2. At least one uppercase and one lowercase</p>
                <p>3. At least one number</p>
                </div>

                </div>
              </div>
              <div style={{clear: 'both'}} />
 
            </div>
          </div>

        );
    }
}




        //     <div>
        //     <meta charSet="UTF-8" />
        //     <meta name="viewport" content="width=, initial-scale=1.0" />
        //     <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        //     <title>Document</title>
        //     <div className="container">
        //       <div className="welcome">Welcome : "XXX", Log on at: (Current time)</div>
        //       <div className="portrait" />
        //       <div className="basic_info">
        //         <p>Edit your profile here: </p>
        //         <label>&nbsp;&nbsp;First Name : </label>
        //         <input type="text" id="first_name" defaultValue="get from backend" />
        //         <label>&nbsp;&nbsp;Last Name : </label>
        //         <input type="text" id="Last_name" defaultValue="get from backend" />
        //         <label>&nbsp;&nbsp;Email : </label>
        //         <input type="text" id="Email" defaultValue="get from backend" />
        //         <label>&nbsp;&nbsp;Mobile : </label>
        //         <input type="text" id="Mobile" defaultValue="get from backend" />
        //         <label>&nbsp;&nbsp;Age : </label>
        //         <input type="text" id="Age" defaultValue="get from backend" />
        //         <label>&nbsp;&nbsp;Address : </label>
        //         <input type="text" id="Age" defaultValue="get from backend" />
        //         <p>Gender : <input id="man" type="radio" defaultChecked="checked" name={1} />Male
        //           <input id="woman" type="radio" name={1} />Famle</p>
        //         <button>Save</button>
        //         <button>Cancel</button>
        //       </div>
        //       <a href="#">change your portrait</a>
        //       <div style={{clear: 'both'}} />
        //       <div className="account_info">
        //         <p>Role: Student</p>
        //         <p>Enrolled in Subject: XXXX, XXXX, XXXX</p>
        //         <p>Account Number: xxxxxxxxxxxxxxxxx</p>
        //         <p>Consider chnaging password?</p>
        //         <button className="pwd">Change Your Password</button>
        //       </div>
        //     </div>
        //   </div>



