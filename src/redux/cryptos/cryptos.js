const FETCH_CRYPTOS = 'cryptocurrencies/cryptos/FETCH_CRYPTOS';

const BASE_URL = 'https://api.coincap.io/v2/assets';

const initialState = [];

export const fetchCryptosSuccess = (payload) => ({
  type: FETCH_CRYPTOS,
  payload,
});

const formatData = (cryptos) => cryptos.map((crypto) => (
  {
    ...crypto,
    changePercent24Hr: parseFloat(crypto.changePercent24Hr),
    priceUsd: parseFloat(crypto.priceUsd),
    marketCapUsd: parseFloat(crypto.marketCapUsd),
    supply: parseInt(crypto.supply, 10),
  }
));

export const fetchCryptos = () => async (dispatch) => {
  await fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => dispatch(fetchCryptosSuccess(formatData(response.data))));
};

const cryptosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTOS:
      return action.payload;
    default:
      return state;
  }
};

export default cryptosReducer;
