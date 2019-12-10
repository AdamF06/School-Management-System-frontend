import React, { Component } from 'react';
import { Icon } from 'antd'
import Initial from './Initial'
import Success from './Success'
import Loading from './Loading'
class Dialog extends Component {
    state = {
        logState: "initial"
    }

    setSuccess = () => {
        this.setState({
            logState: 'success'
        })
    }
    setFailure = () => {
        this.setState({
            logState: 'failure'
        })
    }
    render() {
        const quit = (
            <div className="dialog__button-container">
                <button onClick={this.props.closeDialog}><Icon type="close-circle" /></button>
            </div>
        )
        let dialog = (<> </>)

        let initialDialog = (
            <div className='container'>
                <div className="dialog">
                    {quit}
                    <Initial success={() => this.setState({ logState: "loading" })} />
                </div>
            </div>
        )

        let successDialog = (
            <div className='container'>
                <div className="dialog">
                    {quit}
                    <Success closeDialog={this.props.closeDialog} />
                </div>
            </div>
        )
        let loadingDialog = (
            <div className='container'>
                <div className="dialog">
                    {quit}
                    <Loading
                        setSuccess={this.setSuccess}
                        setFailure={this.setFailure}
                    />
                </div>
            </div>
        )

        switch (this.state.logState) {

            case "success":
                dialog = successDialog
                break;
            case "loading":
                dialog = loadingDialog
                break;
            default:
                dialog = initialDialog
        }

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