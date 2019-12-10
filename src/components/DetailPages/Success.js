import React, { Component } from 'react';
import { Icon } from 'antd'
class Success extends Component {
    state = {
        second: 3
    }
    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    second: this.state.second - 1
                })
                if(this.state.second===0){
                    this.props.closeDialog()
                }
            }, '1000')

    }
    render() {
        return (
            <div className="success">
                <Icon type="check-circle" />
                <div>
                    <h1>Enroll Success!</h1>
                    <h1>You are backing to page in {this.state.second}.. s</h1>
                </div>
            </div>
        );
    }
}

export default Success;