import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import YouTube from 'react-youtube';

import './ModuleDetail.css'
class ModuleDetail extends Component {
    state = {}
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const modules = this.props.course.module
        const no = this.props.history.location.pathname.split('/').pop()
        const { description, module_name } = modules[no - 1]

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        console.log(description)
        return (
            <div className="module-detail">
                <section className='header'>
                    <h1>{module_name} </h1>
                </section>
                <div className="subtitle">
                    <div className="wrapper">
                        <h2>About {module_name}</h2>
                        <h2>About {module_name}</h2>
                    </div>
                </div>

                <section className='description'>
                    <p> {description}</p>
                </section>
                <section className='video'>
                    <YouTube
                        videoId="aGtkWBtZ-HQ"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </section>
                <div className="subtitle">
                    <div className="wrapper">
                        <h2>Resources</h2>
                        <h2>Resources</h2>
                    </div>
                </div>
                <section className="resource">

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