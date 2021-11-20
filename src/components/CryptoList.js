import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchCryptos } from '../redux/cryptos/cryptos';
import Header from './Header';
import cryptoRank from '../img/cryptosRank.png';
import cryptoHeader from '../img/cryptocurrencies.png';
import statsUp from '../img/stats-up.svg';
import statsDown from '../img/stats-down.svg';

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
    },
    {
      id: 6,
      title: '51-75',
      img: '',
      start: '51',
    },
    {
      id: 7,
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
      <Header title="CRYPTO CURRENCIES" img={cryptoHeader} value={totalMarketCap} />
      <h2>LAST 24 HOURS CHANGES</h2>
      <ul className="row changes-list">
        <li key="1" className="col-6 pt-3">
          <Link to="/growing">
            <img src={statsUp} alt="Growing Stats" className="w-75" />
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="float-end" />
            <h3 className="pt-2">Growing Assets</h3>
            <h4>Most growing:</h4>
            <p>
              {(maxCrypto !== null)
                ? `${maxCrypto.name}: ${maxCrypto.changePercent24Hr.toFixed(2)}%`
                : ''}
            </p>
          </Link>
        </li>
        <li key="2" className="col-6 pt-3">
          <Link to="/declining">
            <img src={statsDown} alt="Declining Stats" className="w-75" />
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="float-end" />
            <h3 className="pt-2">Declining Assets</h3>
            <h4>Most Declining:</h4>
            <p>
              {(minCrypto !== null)
                ? `${minCrypto.name}: ${minCrypto.changePercent24Hr.toFixed(2)}%`
                : ''}
            </p>
          </Link>
        </li>
      </ul>
      <h2>RANKING</h2>
      <ul className="row ranking-list">
        {rankLinks.map((link) => (
          (link.id === 5)
            ? <li key={link.id} className="d-none" />
            : (
              <li key={link.id} className="col-6 pt-3">
                <Link to={`/rank-${link.start}`}>
                  <img src={cryptoRank} alt="Cryptocurrencies" className="w-75" />
                  <FontAwesomeIcon icon={faArrowAltCircleRight} className="float-end" />
                  <h3 className="pt-2 rank-title">{link.title}</h3>
                  <p>{`# ${link.start} ${(cryptos.length !== 0) ? cryptos.find((crypto) => crypto.rank === link.start).name : '...'}`}</p>
                </Link>
              </li>
            )
        ))}
      </ul>
    </>
  );
};

export default CryptoList;
