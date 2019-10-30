import React, { Component } from 'react';
import './Content.css'
class Content extends Component {
    state = {}
    render() {
        return (
            <div className="content">
                <h1>I'm content</h1>
                <h2>test, added here</h2>
                <h2>added from David's branch</h2>
            </div>
        );
    }
}

export default Content;