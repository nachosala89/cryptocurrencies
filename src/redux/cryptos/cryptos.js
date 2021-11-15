const FETCH_CRYPTOS = 'cryptocurrencies/cryptos/FETCH_CRYPTOS';

const BASE_URL = 'https://api.coincap.io/v2/assets';

const initialState = [];

export const fetchCryptosSuccess = (payload) => ({
  type: FETCH_CRYPTOS,
  payload,
});

export const fetchCryptos = () => async (dispatch) => {
  await fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => dispatch(fetchCryptosSuccess(response.data)));
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
