import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  show = true,
  redirectTo = "/",
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      show === true ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

export default PrivateRoute;
