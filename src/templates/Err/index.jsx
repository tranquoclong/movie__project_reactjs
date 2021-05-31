import React from "react";
import { Route } from "react-router-dom";

function ErrTemplate(props) {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
}

const RouterErrTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <ErrTemplate>
        <Component />
      </ErrTemplate>
    </Route>
  );
};

export default RouterErrTemplate;
