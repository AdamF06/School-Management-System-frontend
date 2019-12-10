import React, { Component } from 'react';
import {Icon} from 'antd'
class Loading extends Component {
    state = {  }
    componentDidMount(){
        setTimeout(
           ()=>{
               this.props.setSuccess()
           } 
            ,"1500")
    }
    render() { 
        return ( 
            <div className="loading">
                <Icon type="sync" />
                <h1>Processing <span className="dotting"></span></h1>
            </div>

         );
    }
}
 
export default Loading;