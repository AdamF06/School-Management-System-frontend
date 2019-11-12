import React, { Component } from 'react';
class SecondNav extends Component {
    
    state = {  }
    render() { 
        const {props} = this.props
        console.log(props.selectedSecondNav+' from second nav')
        return ( 
            <>
            </>
         );
    }
}
 
export default SecondNav;