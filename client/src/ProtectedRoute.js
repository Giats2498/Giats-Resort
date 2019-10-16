import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProtectedValue from "./ProtectedValue";

export const ProtectedRoute = ({component: Component,...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!ProtectedValue.protected) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
};
