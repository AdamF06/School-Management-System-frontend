import React from 'react';
import { connect } from 'react-redux';
import {Route,
        Redirect
} from'react-router-dom'

class PrivateRoute extends React.Component {
  render() {
    const { children, user_status } = this.props;
    return (
      <Route
        // {...rest}       
        render={({ location }) =>
             user_status ==="online"? (
              children
            ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
        />
    )
  }
}
// function PrivateRoute() {
//     const { children, status } = props;
//     console.log('========status', status);
//     return (
      
//       />
//     );
//   }
  
function mapStateToProps(state) {
    const { auth } = state;
    return {
        user_identity: auth.user_identity,
        user_status: auth.user_status
    };
}
export default connect(mapStateToProps, {})(PrivateRoute);
