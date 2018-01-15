import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGlobalProperties } from '../actions';

import Widget from '../components/widget/Widget';
import Block from '../components/block/Block';

class Status extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getGlobalProperties());
    // We need fresh data for each 3secs.
    setInterval(() => {
      dispatch(getGlobalProperties());
    }, 3000);
  }

  render() {
    const {
      average_block_size,
      current_supply,
      current_witness,
      head_block_number,
      maximum_block_size,
      total_vesting_fund_steem
    } = this.props;
    return current_supply ? (
      <div className="headup-grid">
        <Widget>
          <Block
            label="current_supply"
            content={current_supply}
            subcontent="~399M US dollars(placeholder)"
          />
        </Widget>
        <Widget>
          <Block
            label="total_vesting_fund_steem"
            content={total_vesting_fund_steem}
            subcontent="~218M US dollars(placeholder)"
          />
        </Widget>
        <Widget>
          <Block
            label="STEEM"
            content="1.14 USD - 0.97 EUR"
            subcontent="(placeholder)"
          />
        </Widget>
        <Widget>
          <Block
            label="head_block_number"
            content={head_block_number}
            subcontent={'witnessed by: ' + current_witness}
          />
        </Widget>
        <Widget>
          <Block
            label="average_block_size"
            content={average_block_size}
            subcontent="-"
          />
        </Widget>
        <Widget>
          <Block
            label="maximum_block_size"
            content={maximum_block_size}
            subcontent="-"
          />
        </Widget>
      </div>
    ) : (
      <span>loading...</span>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.r1
  };
};

export default connect(mapStateToProps)(Status);
