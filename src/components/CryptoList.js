import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <ul className="container crypto-list">
      {(typeof cryptos !== 'undefined')
        ? cryptos.map((crypto) => (
          <li key={crypto.id} className="col-6">
            <Link to={crypto.id}>
              <h3>{crypto.name}</h3>
            </Link>
          </li>
        ))
        : <li>Loading...</li>}
    </ul>
  );
};

export default CryptoList;
