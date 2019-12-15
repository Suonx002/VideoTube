import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/authAction';

const Home = ({ loadUser, auth }) => {
  const { token } = auth;
  useEffect(() => {
    if (token) {
      loadUser();
    }

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Home Component</h1>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loadUser })(Home);
