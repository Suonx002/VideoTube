import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { loadUser } from '../../actions/authAction';
import MDSpinner from 'react-md-spinner';

const PrivateRoute = ({ component: Component, auth, loadUser, ...rest }) => {
  const { isAuthenticated, loading, token } = auth;

  useEffect(() => {
    if (token) {
      loadUser();
    }

    //eslint-disable-next-line
  }, [token]);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && !loading ? (
          <Component {...props} />
        ) : (
          <>
            <MDSpinner />
            <Redirect to='/login' />
          </>
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
