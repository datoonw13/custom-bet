import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
   const isSignedIn = true;
   // const pending = false;
   const render = ({ location }) => {
      // if (pending) {
      //    return <p>waiting</p>;
      // }
      return isSignedIn ? children : <Redirect to={{ pathname: "/login", state: { from: location } }} />;
   };
   return <Route {...rest} render={render} />;
}
