import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ children, ...rest }) {

  return (

    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('isLogin') == 'true' ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/user/login', state: { from: location } }}
          />
                )
            }
        />
  );
}


export default AuthRoute;
