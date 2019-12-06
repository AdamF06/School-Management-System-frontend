import React, { Component } from 'react';
import './Module.css'
import ModuleItems from '../ModuleItems/ModuleItems'

const dummyModules = [
    {
        name:'HTML',
        date:'week_1'
    },
    {
        name:'React',
        date:'week_2'
    },
    {
        name:'Mongo DB',
        date:'week_3'
    },
    {
        name:'Project',
        date:'week_4'
    },
]
class Module extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="moduleContainer">
                <div className="module">
                    {
                        dummyModules.map((item, index)=> <ModuleItems {...item} key={index} />)
                    }
                </div>
            </div>
         );
    }
}
 
export default Module;