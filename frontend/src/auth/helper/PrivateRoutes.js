import React from 'react'
import { Router, Redirect } from 'react-router-dom';

import {isAuthenticated} from "./index"

const PrivateRoutes = ({ children, ...rest }) => {
	return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default function PrivateRoutes;