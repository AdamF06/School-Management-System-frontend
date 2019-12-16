import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Module.css'
import ModuleItems from '../ModuleItems/ModuleItems'

class Module extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props.module)
        const modules = this.props.module
        const {id} = this.props
        return (
            <div className="moduleContainer">
                <div className="module">
                    {
                        modules.map(
                            (item, index) =>
                                <Link
                                key={index}
                                to={`/course/${id}/module/${item.No}`}
                                >
                                    <ModuleItems {...item}/>
                                </Link>
                        )
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { student } = state;
    return {
        course: student.course
    };
}

export default connect(mapStateToProps)(Module);