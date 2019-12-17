import React, { Component } from 'react';
class Initial extends Component {
    state = {}
    render() {
        return (
            <>
                <h2>Please confirm you are enrolling in :</h2>
                <h3>COMP003</h3>
                <h3> Full Stack Developing </h3>
                <button className="confirm" 
                onClick={this.props.load}
                >Confirm</button>
            </>
        );
    }
}

export default Initial;