import steem from 'steem';

// Set api endpoint to JSON-RPC, since WebSocket doesn't work
steem.api.setOptions({ url: 'https://api.steemit.com' });

export function getGlobalProperties() {
  return (dispatch, getState) => {
    steem.api.getDynamicGlobalProperties((err, result) => {
      const {
        average_block_size,
        current_supply,
        current_witness,
        head_block_number,
        maximum_block_size,
        total_vesting_fund_steem
      } = result;
      return dispatch({
        type: 'GET_GLOBAL_PROPERTIES',
        payload: {
          average_block_size,
          current_supply,
          current_witness,
          head_block_number,
          maximum_block_size,
          total_vesting_fund_steem
        }
      });
    });
  };
}

export function getPrice() {
  return (dispatch, getState) => {
    fetch('https://api.coinmarketcap.com/v1/ticker/steem/?convert=EUR')
      .then(result => result.json())
      .then(data => {
        const { price_usd, price_btc, price_eur } = data[0];
        dispatch({
          type: 'GET_PRICE',
          payload: {
            btc: price_btc,
            eur: parseFloat(price_eur).toFixed(2),
            usd: parseFloat(price_usd).toFixed(2)
          }
        });
      });
  };
}
