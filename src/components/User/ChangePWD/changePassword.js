import React, { Component } from 'react';
import './changepwd.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Items from '../Common/Items'
const UserLock = <FontAwesomeIcon icon={faUserLock} size="1x" color="grey" />
const Email = <FontAwesomeIcon icon={faEnvelope} size="1x" color="grey" />

const items = [
  {
    icon: Email,
    labelName: "Enter your Email address"
  },
  {
    icon: UserLock,
    labelName: "Enter Your old  password"
  },
  {
    icon: UserLock,
    labelName: "Enter New password"
  },
  {
    icon: UserLock,
    labelName: "Confirm new password"
  },
]
class ChangePassword extends Component {
  state = {}
  render() {
    return (
      <div className="conatiner">
       <div className = 'itemsContainer'>
          {items.map(
            (item) => <Items {...item} />
          )}
        </div>
        <button className="submit">Submit</button>
      </div>
    );
  }
}

export default ChangePassword;



