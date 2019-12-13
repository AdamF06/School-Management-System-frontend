import React, { Component } from 'react';

class Items extends Component {
    state = {}
    itemInput = (e) => {
        const {addField,changing} = this.props
        addField(e.target.name,e.target.value)
        changing()
    }
    render() {
        const { icon, labelName, placeHolder, name } = this.props
        return (
            <div className="item">
                <input
                    name={name}
                    placeholder={placeHolder}
                    onChange={ (e)=>{this.itemInput(e)}}
                ></input>
                <div className="item__label">
                    <h2>{icon}</h2>
                    <h2>{labelName}</h2>
                </div>
            </div>
        );
    }
}

export default Items;
