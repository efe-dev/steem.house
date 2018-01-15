import React from 'react';
import PropTypes from 'prop-types';
import './Block.css';

const Block = ({ label, content, subcontent }) => {
  return (
    <div className="block">
      <label htmlFor={label}>{label}</label>
      <div id={label} className="content">
        {content}
      </div>
      {subcontent && <div className="subcontent">{subcontent}</div>}
    </div>
  );
};

Block.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subcontent: PropTypes.string
};

export default Block;
