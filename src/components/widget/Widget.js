import React from 'react';
import PropTypes from 'prop-types';
import './Widget.css';

const Widget = ({ fluid, children }) => {
  return <div className="widget">{children}</div>;
};

Widget.defaultProps = {
  fluid: false
};

Widget.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired
};

export default Widget;
