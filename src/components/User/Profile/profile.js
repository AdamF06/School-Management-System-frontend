import React, { Component } from 'react';
import './Profile.css';
import Items from '../Common/Items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faEdit, faEnvelope, faIdCard, faPhoneSquare, faSchool, faIdBadge, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="grey" />
const Pencil = <FontAwesomeIcon icon={faEdit} size="1x" color="white" />
const Port_s = <FontAwesomeIcon icon={faPortrait} size="1x" color="grey" />
const Email = <FontAwesomeIcon icon={faEnvelope} size="1x" color="grey" />
const Age = <FontAwesomeIcon icon={faIdCard} size="1x" color="grey" />
const Mobile = <FontAwesomeIcon icon={faPhoneSquare} size="1x" color="grey" />
const School = <FontAwesomeIcon icon={faSchool} size="1x" color="grey" />
const Title = <FontAwesomeIcon icon={faIdBadge} size="1x" color="grey" />
const Address = <FontAwesomeIcon icon={faMapMarkedAlt} size="1x" color="grey" />

const leftItems = [
  {
    icon: Port_s,
    labelName: "First Name"
  },
  {
    icon: Port_s,
    labelName: "Last Name"
  },
  {
    icon: Mobile,
    labelName: "Mobile"
  },
  {
    icon: School,
    labelName: "School"
  },
]
const rightItems = [
  {
    icon: Title,
    labelName: "Title"
  },
  {
    icon: Age,
    labelName: "Age"
  },
  {
    icon: Email,
    labelName: "Second Email"
  },
]

class Profile extends Component {
  state = {
    savebuttonActive:false
  }

  toggle=(e)=>{
    e.preventDefault(); 
    const current = this.state.savebuttonActive
    this.setState({
      savebuttonActive:current?false:true
    })
  }

  render() {
    return (
      <div className='profile'>

        <div className="profile__avatarContainer">
          <div className='avatar'> {Port} </div>
          <button className="edit"> <h6>{Pencil}</h6> <h6> Edit Avatar</h6> </button>
        </div>

        <div className="profile__mainContainer">
          <div className="main">

            <div className="main__header">
              <h1>Edit your profile here</h1>
            </div>

            <div className="main__body">
              <div className="main__body__left">
                {leftItems.map(
                  (item) => <Items {...item} />
                )}
              </div>

              <div className="main__body__right">

                {rightItems.map(
                  (item) => <Items {...item} />
                )}
              </div>

            </div>
            <div className="main__body__item">
              <div className="item__label">
                <h2> {Address} </h2>
                <h2>First Address</h2>
              </div>
              <input></input>
            </div>

            <div className="main__body__item">
              <div className="item__label">
                <h2> {Address} </h2>
                <h2>Second Address</h2>
              </div>
              <input></input>
            </div>

            <div className="main__body__setButton">
              <button className='editbutton' onClick={this.toggle}>Edit</button>
              <button className={`savebutton ${this.state.savebuttonActive? '':'--inactive'}`}
              disabled={!this.state.savebuttonActive}
              onClick={this.toggle}
              >Save</button>
            </div>
          </div>
        </div>

        <div className="profile__courseContainer">
          <h2>Student ID:</h2>
          <h2>You have enrolled in:</h2>
          <h2>Your finance:</h2>
          <button>Change Password</button>
        </div>
      </div>
    );
  }
}

export default Profile;

