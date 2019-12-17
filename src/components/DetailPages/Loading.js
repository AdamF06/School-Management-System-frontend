import React, { Component } from 'react';
import { connect } from 'react-redux';
import {enroll} from '../../actions'
import {Icon} from 'antd'
class Loading extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount(){
        const{enroll,courseList,enrolledCourse} = this.props
        enroll(enrolledCourse,courseList)
    }
    componentWillReceiveProps(next){
        if(next.err.err){
            setTimeout(() => {
                this.props.setFailure()
            }, 1000);    
        }
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
function mapStateToProps(state) {
    const { student,course} = state;
    return {
        courseList: student.info.course,
        enrolledCourse:course.data,
        err:student.err
    };
}
export default connect(mapStateToProps, {
    enroll
})(Loading)
