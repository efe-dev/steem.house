import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import Status from './Status';

const App = () => (
  <div>
    <Navbar />
    <Status />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  };
};

export default connect(mapStateToProps)(App);
