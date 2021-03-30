import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { publicRoutes } from "./routes";
import AppRoute from "./routes/route";

import Layout from "./components/Layout/Layout";

import './assets/styles/main.scss';

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, idx) => (
            <AppRoute
                key={idx}
                exact={route.exact}
                path={route.path}
                component={route.component}
                layout={Layout}
                isAuthProtected={false}
            />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
