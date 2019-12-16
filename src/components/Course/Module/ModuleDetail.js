import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class ModuleDetail extends Component {
    state = {}
    render() {
        const modules = this.props.course.module
        const no = this.props.history.location.pathname.split('/').pop()
        const { description, module_name } = modules[no - 1]
        console.log(description)
        return (
            <div className="module-detail">
                <section className='header'>
                    <h1>{module_name} </h1>
                </section>
                <section className='description'>
                    <h2>About {module_name}</h2>
                    <p> {description}</p>
                </section>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { course } = state;
    return {
        course: course.data
    };
}
export default connect(mapStateToProps)(withRouter(ModuleDetail))