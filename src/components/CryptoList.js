import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCryptos } from '../redux/cryptos/cryptos';

const CryptoList = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptosReducer);

  useEffect(() => {
    if (cryptos.length === 0) {
      dispatch(fetchCryptos());
    }
  }, []);

  return (
    <h1>Cryptos</h1>
  );
};

export default CryptoList;
