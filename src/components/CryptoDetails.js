import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';

const CryptoDetails = () => {
  const { id } = useParams();
  const cryptos = useSelector((state) => state.cryptosReducer);
  let filtered = [];
  switch (id) {
    case 'growing':
      filtered = cryptos.filter((crypto) => crypto.changePercent24Hr >= 0);
      filtered.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
      break;
    case 'declining':
      filtered = cryptos.filter((crypto) => crypto.changePercent24Hr < 0);
      filtered.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);
      break;
    case 'rank-1':
      filtered = cryptos.filter((crypto) => (crypto.rank <= 25));
      break;
    case 'rank-26':
      filtered = cryptos.filter((crypto) => (crypto.rank > 25 && crypto.rank <= 50));
      break;
    case 'rank-51':
      filtered = cryptos.filter((crypto) => (crypto.rank > 50 && crypto.rank <= 75));
      break;
    default:
      filtered = cryptos.filter((crypto) => (crypto.rank > 75));
      break;
  }
  const totalMarketCap = filtered.reduce(
    (accum, crypto) => accum + parseInt(crypto.marketCapUsd, 10), 0,
  );

  return (
    <>
      <Header title="Cryptocurrencies" img="https://picsum.photos/200/300" value={totalMarketCap} />
      <ul className="row">
        {filtered.map((crypto) => (
          <li key={crypto.id} className="detail-row">
            <h3>{`#${crypto.rank} - ${crypto.symbol} - ${crypto.name}`}</h3>
            <p>{`Change last 24 hours: ${crypto.changePercent24Hr.toFixed(2)}%`}</p>
            <p>{`Price: U$S ${crypto.priceUsd.toFixed(7)}`}</p>
            <p>{`Total supply: ${crypto.supply}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CryptoDetails;
