import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCryptos } from '../redux/cryptos/cryptos';
import Header from './Header';

const CryptoList = () => {
  const rankLinks = [
    {
      id: 3,
      title: '1-25',
      img: '',
      start: '1',
    },
    {
      id: 4,
      title: '26-50',
      img: '',
      start: '26',
    },
    {
      id: 5,
      title: '51-75',
      img: '',
      start: '51',
    },
    {
      id: 6,
      title: '+76',
      img: '',
      start: '76',
    },
  ];

  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptosReducer);

  useEffect(() => {
    if (cryptos.length === 0) {
      dispatch(fetchCryptos());
    }
  }, []);

  let totalMarketCap = 0;
  let minCrypto = null;
  let maxCrypto = null;
  if (cryptos.length !== 0) {
    totalMarketCap = cryptos.reduce(
      (accum, crypto) => accum + crypto.marketCapUsd, 0,
    );
    const minPercent = Math.min(...cryptos.map((crypto) => crypto.changePercent24Hr));
    minCrypto = cryptos.find((crypto) => crypto.changePercent24Hr === minPercent);
    const maxPercent = Math.max(...cryptos.map((crypto) => crypto.changePercent24Hr));
    maxCrypto = cryptos.find((crypto) => crypto.changePercent24Hr === maxPercent);
  }

  return (
    <>
      <Header title="Cryptocurrencies" img="https://picsum.photos/200/300" value={totalMarketCap} />
      <h2>Last 24 hours changes</h2>
      <ul className="row">
        <li key="1" className="col-6">
          <Link to="/growing">
            <h3>Growing Assets</h3>
            <h4>Most growing:</h4>
            <p>
              {(maxCrypto !== null)
                ? `${maxCrypto.name}: ${maxCrypto.changePercent24Hr.toFixed(2)}%`
                : ''}
            </p>
          </Link>
        </li>
        <li key="2" className="col-6">
          <Link to="./declining">
            <h3>Declining Assets</h3>
            <h4>Most Declining:</h4>
            <p>
              {(minCrypto !== null)
                ? `${minCrypto.name}: ${minCrypto.changePercent24Hr.toFixed(2)}%`
                : ''}
            </p>
          </Link>
        </li>
      </ul>
      <h2>Ranking</h2>
      <ul className="row">
        {rankLinks.map((link) => (
          <li key={link.id} className="col-6">
            <Link to={`/rank-${link.start}`}>
              <h3>{link.title}</h3>
              <p>{`# ${link.start} ${cryptos.find((crypto) => crypto.rank === link.start).name}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CryptoList;
