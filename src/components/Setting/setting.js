import React, { Component } from 'react';
import './setting.css';
import { Button } from 'react-bootstrap';
import Collapsible from './Collapse/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faPlus, faEdit, faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="grey" />
const Plus = <FontAwesomeIcon icon={faPlus} size="1x" color="white" />
const Pencil = <FontAwesomeIcon icon={faEdit} size="1x" color="grey" />
const Download = <FontAwesomeIcon icon={faFileDownload} size="1x" color="grey" />

export default class Setting extends Component {
    render() {
        return (
            <div className="overlayer">
                <div className='container setting content-wrapper'>
                    <div className='profile-pic'>
                        {Port}
                    </div>
                    <h1 >XXX's Settings</h1>

                    <table className='profile-table'>
                        <tbody>
                            <tr>
                                <th>
                                    <label>Full Name:</label>
                                </th>
                                <td>
                                    <span className='main'>XXX OO</span>
                                    <br />
                                    <span className='second'>This name will be used for grading</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label >Display Name:</label>
                                </th>
                                <td>
                                    <span className='main'>XXX OO</span>
                                    <br />
                                    <span className='second'>People will see this name in discussions, messages and comments</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Language:</label>
                                </th>
                                <td>
                                    <span className='main'>System Default (English(Australia))</span>
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Time Zone:</label>
                                </th>
                                <td>
                                    <span className='main'>Sydney</span>
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='web-services'>
                        <h2>Web Services</h2>
                        <p>Canvas can make your life a lot easier by tying itself in with the web tools you already use. Click any of the services in "Other Services" to see what we mean.</p>
                        <p>
                            <input type="checkbox" id='show_user_services' ></input>
                            <label>Let fellow course/group members see which services I've linked to my profile</label>
                        </p>
                        <table className='registered-service'>
                            <tr>
                                <td>
                                    <h3>Registered Services</h3>
                                    <div className='sub'>
                                        <ul>No registered Services</ul>
                                    </div>
                                </td>
                                <td>
                                    <h3>Other Services</h3>
                                    <div className='sub'>
                                        <ul> Click any service below to register:</ul>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div className='approved-integrations'>
                            <h2>Approved Integrations: </h2>
                            <div className='sub grey'>   Third-party applications can request permission to access the Canvas site on your behalf. As you begin authorizing applications you will see them listed here.      </div>
                            <div className='access-token '>
                                <Button variant="primary" className=''>{Plus}New Access Token</Button>
                            </div>
                        </div>
                        <h2>Feature Options: </h2>
                        <div className='feature-wrapper'>
                            <div className='user-feature-flag'>
                                <ul className='feature-flags'>
                                    <Collapsible />
                                </ul>

                            </div>
                        </div>
                        <div className='right-side-wrapper'>
                            <aside className='right-side'>
                                <h2>Ways to Contact</h2>
                                <table>
                                    <thead>
                                        <tr >
                                            <th>Email Addresses</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <p>abcd12345@gmail.com</p>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='plus-email-address '>
                                                    <Button variant="secondary" className='' size='sm'>{Plus}Email Address</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead>
                                        <tr >
                                            <th>Other Contacts</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td>
                                                <div className='plus-contact-method '>
                                                    <Button variant="secondary" className='' size='sm'>{Plus}Contact Method</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                                <div className='foot'>
                                    <hr />
                                    <button className='btn cux-btn' href='#'>
                                        {Pencil} Edit Settings
                                    </button>
                                    <br />
                                    <button className='btn cux-btn' href='#'>
                                        {Download}  Download Submissions
                                    </button>


                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

