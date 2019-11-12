import React, { Component } from 'react';
import '../Common/useritems.css';
// import Port from '../UserRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPortrait, faEdit} from '@fortawesome/free-solid-svg-icons'
// import {faEdit} from '@fortawesome/free-regular-svg-icons'

const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="grey"/>
const Pencil = <FontAwesomeIcon icon={faEdit} size="1x" color="grey"/>

class Profile extends Component {
    state = {}
    render() {
        return (
            <div className="useritems profile">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>
            <div className="container">
              <div className="welcome">Welcome : "XXX", Log on at: (Current time)</div>
              <div className="left_col">
                <span className="portrait_box">
                  <div className="portrait" >
                    <i>{Port}</i>
                  </div>
                  {/* <a href="#" className='bold'>Edit</a> */}
                  <button>{Pencil}Edit Your Photo</button>
                </span>
              </div>
              <vl/>
              <div className='right-col'>
                <div className="basic_info">
                  <p className='bold'>Edit your profile here: </p>
                  <hr/>
                  <div className='input_shadow'>
                    <div className='col'>
                      <label>&nbsp;&nbsp;First Name  </label>
                      <input type="text" id="first_name" defaultValue="get from backend" />
                      <label>&nbsp;&nbsp;Last Name  </label>
                      <input type="text" id="Last_name" defaultValue="get from backend" />
                    </div>
                    <div className='col'>
                      <label>&nbsp;&nbsp;Mobile  </label>
                      <input type="text" id="Mobile" defaultValue="get from backend" />
                      <label>&nbsp;&nbsp;Age  </label>
                      <input type="text" id="Age" defaultValue="get from backend" />
                    </div>
                    <div className='col'>
                      <label>&nbsp;&nbsp;Title  </label>
                      <input type="text" id="Title" defaultValue="get from backend" />
                      <label>&nbsp;&nbsp;School  </label>
                      <input type="text" id="School" defaultValue="get from backend" />
                    </div>
                    <div className='col'> 
                      <label>&nbsp;&nbsp;Email  </label>
                      <input type="text" id="Email" defaultValue="get from backend" size='50'/>
                    </div>  
                    <div className='col'>
                      <label>&nbsp;&nbsp;Address  </label>
                      <input type="text" id="Address" defaultValue="get from backend" size='50'/>
                    </div>
                  </div>
                  <div className='col gender'>  
                    <p>Gender  <input id="man" type="radio" defaultChecked="checked" name={1} />Male
                    <input id="woman" type="radio" name={1} />Famle</p>
                    <button>Save</button>
                    <button>Cancel</button> 
                </div>  
            
                </div>
                <div style={{clear: 'both'}} />
                <div className="account_info">
                  <p className='bold'>Role: Student</p>
                  <hr/>
                  <p>Enrolled in Subject: XXXX, XXXX, XXXX</p>
                  <p>Account Number: xxxxxxxxxxxxxxxxx</p>
                  <p>Consider chnaging password?</p>
                  <button className="pwd"><a href='/user/changePassword'>Change Your Password</a></button>
                </div>
              </div>
            </div>
          </div>

        );
    }
}

export default Profile;

