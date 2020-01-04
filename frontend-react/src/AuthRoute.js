import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ children, ...rest }) {
   
    return (

        <Route
            {...rest}
            render={({ location }) =>
                document.cookie ? (
                    children
                ) : (
                    <Redirect
                            to={{ pathname: '/user/login', state: { from: location } }}
                        />
                        

                    )

            }
        />

    );
};
export default AuthRoute;