import React, { Component } from 'react';
import './Sales.css'
import {
    Email,
    Phone
} from '../Icon/Icon'
import SalesItem from './SalesItem'
import Bpay from './bpay.jpg'
const dummyItems = [
    {
        courseName: "Some Course",
        amount: 5000,
        dutDate: "some date"
    },
    {
        courseName: "Some Course2",
        amount: 1000,
        dutDate: "some date"
    },
    {
        courseName: "Some Course3",
        amount: 2000,
        dutDate: "some date"
    },
]


class Sales extends Component {
    state = {
        buttonIndex: 0,
    }
    render() {
        const { buttonIndex } = this.state
        return (
            <div className="sales">
                <div className="header">
                    <h1>Your Finances</h1>
                </div>

                <div className="balance">
                    <div className="balance__header">
                        <h3>Your Balance</h3>
                    </div>
                    <div className="balance__content">
                        <h2>Payment Due: $0.00</h2>
                        <h4>If we need to contact you we will use the following details:
                        <span>{Email}xxx@xx.com</span> <span>{Phone} +61 xxx xxx xxx</span></h4>
                    </div>
                </div>

                <div className="finance">
                    <div className="finance__header">
                        <h3>Your Finance</h3>
                    </div>
                    <div className="finance__content">
                        <div className="finance__content__nav">
                            <button
                                className={`${buttonIndex === 0 ? '--active' : ''}`}
                                onClick={() => this.setState({ buttonIndex: 0 })}
                            ><h5>Fee</h5></button>
                            <button
                                className={`${buttonIndex === 1 ? '--active' : ''}`}
                                onClick={() => this.setState({ buttonIndex: 1 })}
                            ><h5>Payment Method</h5></button>
                            <button
                                className={`${buttonIndex === 2 ? '--active' : ''}`}
                                onClick={() => this.setState({ buttonIndex: 2 })}
                            ><h5>Accont details</h5></button>

                        </div>

                        <div className={`${buttonIndex === 0 ? "finance__content__fee" : "--inactive"}`}>
                            <div className="fee__header">Courses and Fee</div>
                            <div className="fee__tableHeader">
                                <div className="fee__tableHeader__left">
                                    <h2>Course Name</h2>
                                </div>
                                <div className="fee__tableHeader__right">
                                    <h2>Amount</h2>
                                    <h2>Due to Date</h2>
                                </div>
                            </div>
                            <div className="fee__itemContainer">
                                {/* class = item */}
                                {dummyItems.map((item) => <SalesItem {...item} />)}
                            </div>
                        </div>

                        <div className={`${buttonIndex === 1 ? "finance__content__payment" : "--inactive"}`}>
                            <div className="bpay">
                                <div className="bpay__left">
                                    <h3>BPAY (No surcharge applies)</h3>
                                </div>
                                <div className="bpay__right">
                                    <img src={Bpay} alt="Bpay icon"></img>
                                    <p>Use BPAY to securely pay your fees from your cheque or savings account.
                                        For information on how to make a payment through your Australian financial
                                        institution, visit the <span>BPAY website</span>.</p>
                                    <br />
                                    <p>Quote our Biller Code XXXXXX and your BPAY customer reference: XXXXXXXXXX</p>
                                    <br />
                                    <p>This is our preferred method and will NOT incur a surcharge.</p>
                                </div>
                            </div>

                            <div className="mail">
                                <div className="mail__left">
                                    <h3>Mail (No surcharge applies)</h3>
                                </div>
                                <div className="mail__right">
                                    <p>Pay by mail with a cheque, draft or money order made payable to
                                        'The University of Sydney' in Australian Dollars only. Please
                                        include your full name and student ID at the back of the cheque,
                                        and mail your payment to the below address:</p><br />

                                    <p>Domestic Students<br/>Financial Control and Treasury<br/>Level 4, 
                                        Margaret Telfer Building (K07)<br/>The University of Sydney, NSW 2006</p><br/> 

                                    <p>International Students<br/> International Fees<br/> Jane Foss Russell Building (G02)<br/> 
                                        The University of Sydney NSW 2006</p> 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sales;