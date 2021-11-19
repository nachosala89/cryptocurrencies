import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cryptoRank from '../img/cryptosRank.png';
import statsUp from '../img/stats-up.svg';
import statsDown from '../img/stats-down.svg';
import Header from './Header';

const CryptoDetails = () => {
  const { id } = useParams();
  const cryptos = useSelector((state) => state.cryptosReducer);
  let filtered = [];
  let img = cryptoRank;
  let title = '';
  switch (id) {
    case 'growing':
      filtered = cryptos.filter((crypto) => crypto.changePercent24Hr >= 0);
      filtered.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
      img = statsUp;
      title = 'Growing Assets';
      break;
    case 'declining':
      filtered = cryptos.filter((crypto) => crypto.changePercent24Hr < 0);
      filtered.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);
      img = statsDown;
      title = 'Declining Assets';
      break;
    case 'rank-1':
      filtered = cryptos.filter((crypto) => (crypto.rank <= 25));
      title = 'Ranking 1-25';
      break;
    case 'rank-26':
      filtered = cryptos.filter((crypto) => (crypto.rank > 25 && crypto.rank <= 50));
      title = 'Ranking 26-50';
      break;
    case 'rank-51':
      filtered = cryptos.filter((crypto) => (crypto.rank > 50 && crypto.rank <= 75));
      title = 'Ranking 51-75';
      break;
    default:
      filtered = cryptos.filter((crypto) => (crypto.rank > 75));
      title = 'Ranking +76';
      break;
  }
  const totalMarketCap = filtered.reduce(
    (accum, crypto) => accum + parseInt(crypto.marketCapUsd, 10), 0,
  );

  return (
    <>
      <Header title={title} img={img} value={totalMarketCap} />
      <ul className="row">
        {filtered.map((crypto) => (
          <li key={crypto.id} className="detail-row ps-4 pt-3">
            <h3>{`#${crypto.rank} - ${crypto.symbol} - ${crypto.name}`}</h3>
            <div className="row">
              <p className="col-4">{`Last 24 hours: ${crypto.changePercent24Hr.toFixed(2)}%`}</p>
              <p className="col-4">{`Price: U$S ${crypto.priceUsd.toFixed(7)}`}</p>
              <p className="col-4">{`Total supply: ${crypto.supply}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CryptoDetails;
