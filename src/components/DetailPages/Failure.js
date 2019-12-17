import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Icon} from "antd"
class Failure extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="failure">
               <p>{this.props.err.err}</p> 
               <Icon type="warning" />
            </div>
         );
    }
}
function mapStateToProps(state) {
    const { student} = state;
    return {
        err:student.err
    };
}
export default connect(mapStateToProps)(Failure)
