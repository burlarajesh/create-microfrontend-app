import React from "react";
import { connect } from "react-redux";

const Home = () => (
  <div>
    <h1>Hello, developer!</h1>
    <p>This is a micro frontend app created with micro-frontend-starter.</p>
    <p>It is configured with React, Redux and Sass.</p>
    <p>To learn more about micro frontends, click <a href="https://martinfowler.com/articles/micro-frontends.html">here</a> </p>
  </div>
);

export default connect()(Home);
