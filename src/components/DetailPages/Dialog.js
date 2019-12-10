import React, { Component } from 'react';
import { Icon } from 'antd'
class Dialog extends Component {
    state = {
        load:true,
        processing:false,
        success:false,
        faliure:false
    }
    render() {
        let dialog = (
            <div className='container'>
                <div className="dialog">
                    <div className="dialog__button-container">
                        <button onClick={this.props.closeDialog}><Icon type="close-circle" /></button>
                    </div>
                    <h2>Please confirm you are enrolling in :</h2>
                    <h3>COMP003</h3>
                    <h3> Full Stack Developing </h3>
                    <button className="confirm">Confirm</button>
                </div>
            </div>

        )
        if (!this.props.isDialogOpen) {
            dialog = null
        }
        return (
            <>
                {dialog}
            </>
        );
    }
}

export default Dialog;