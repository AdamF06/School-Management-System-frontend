import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import Items from '../Common/Items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faEdit, faPhoneSquare, faSchool, faIdBadge, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="grey" />
const Pencil = <FontAwesomeIcon icon={faEdit} size="1x" color="white" />
const Port_s = <FontAwesomeIcon icon={faPortrait} size="1x" color="grey" />
const Mobile = <FontAwesomeIcon icon={faPhoneSquare} size="1x" color="grey" />
const School = <FontAwesomeIcon icon={faSchool} size="1x" color="grey" />
const Title = <FontAwesomeIcon icon={faIdBadge} size="1x" color="grey" />
const Address = <FontAwesomeIcon icon={faMapMarkedAlt} size="1x" color="grey" />

class Profile extends Component {
  state = {
    savebuttonActive: false
  }

  toggle = (e) => {
    e.preventDefault();
    const current = this.state.savebuttonActive
    this.setState({
      savebuttonActive: current ? false : true
    })
  }

  render() {
    const {
      first_name,
      last_name,
      student_ID,
      address_1,
      address_2,
      avatar,
      title,
      course,
      school,
      mobile_number
    } = this.props.info

    const infoItems = [
      {
        icon: Port_s,
        labelName: "First Name",
        placeHolder: first_name

      },
      {
        icon: Port_s,
        labelName: "Last Name",
        placeHolder: last_name

      },
      {
        icon: Mobile,
        labelName: "Mobile",
        placeHolder: mobile_number

      },
      {
        icon: School,
        labelName: "School",
        placeHolder: school
      },
      {
        icon: Title,
        labelName: "Title",
        placeHolder: title
      },
    ]

    let courseName = course.map((item) => item.course_name)
    let finace = course.map((item) => item.paied).reduce((accumulator, currentValue) => accumulator + currentValue)
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
                {infoItems.map(
                  (item, index) => <Items {...item} key={index} />
                )}
              </div>
            </div>
            <div className="main__body__item">
              <div className="item__label">
                <h2> {Address} </h2>
                <h2>First Address</h2>
              </div>
              <input placeholder={address_1}></input>
            </div>

            <div className="main__body__item">
              <div className="item__label">
                <h2> {Address} </h2>
                <h2>Second Address</h2>
              </div>
              <input placeholder={address_2}></input>
            </div>

            <div className="main__body__setButton">
              <button className='editbutton' onClick={this.toggle}>Edit</button>
              <button className={`savebutton ${this.state.savebuttonActive ? '' : '--inactive'}`}
                disabled={!this.state.savebuttonActive}
                onClick={this.toggle}
              >Save</button>
            </div>
          </div>
        </div>

        <div className="profile__courseContainer">
          <h2>Student ID: {student_ID}</h2>
          <h2>You have enrolled in: </h2>
          <ul>
            {
              courseName.map((item, index) =>
                <li key={index}> {item} </li>
              )
            }
          </ul>
          <h2>Your finance: <span>${finace}</span></h2>
          <h2>Need to be paied</h2>
          <button>Change Password</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { student } = state;
  return {
    info: student.info,
    _id: student._id
  };
}
export default connect(mapStateToProps, {})(Profile);
