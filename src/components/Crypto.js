import { useParams } from 'react-router-dom';

const Crypto = () => {
  const { id } = useParams();

  return (
    <h2>{id}</h2>
  );
};

export default Crypto;
