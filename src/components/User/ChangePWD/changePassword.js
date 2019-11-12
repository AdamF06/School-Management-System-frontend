import React, { Component } from 'react';
import '../Common/useritems.css'
export default class ChangePassword extends Component {
    state = {}
    render() {
        return (
            <div className="useritems changepassword">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>
            <div className="container">
              <div className="welcome">Welcome : "XXX", Log on at: (Current time)</div>
              <div className="changePassword">
                <form >
                <p  className='bold'>Change Your Password Here </p>
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
                <p className ="rule bold" >Password Changing Rule</p>
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



