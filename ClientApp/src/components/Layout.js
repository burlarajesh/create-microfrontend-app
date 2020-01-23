import React from "react";
import PropTypes from "prop-types";
import SampleNav from "./SampleNav";

export const Layout = props => {
  return (
    <div>
      <SampleNav />
      <div>{props.children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
