import React from 'react';
import { connect } from 'react-redux';
import {Route,
        Redirect
} from'react-router-dom'

function PrivateRoute(props) {
    return (
      <Route
        // {...rest}
        render={({ location }) =>
           props.status === 'signedin'? (
            props.children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
function mapStateToProps(state) {
    const { user } = state;
    return {
        identity: user.identity,
        status: user.status
    };
}
export default connect(mapStateToProps, {})(PrivateRoute);
