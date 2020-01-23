import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Counter from "./components/Counter";
import { Redirect } from "react-router-dom";
export const App = () => (
  <Layout>
    <Route exact path="/" render={() => <Redirect to="/mfe1" />} />
    <Route exact path="/mfe1" component={Home} />
    <Route exact path="/mfe1/counter" component={Counter} />
  </Layout>
);
