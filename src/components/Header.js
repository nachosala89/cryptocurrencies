import PropTypes from 'prop-types';

const Header = (props) => {
  const { img, title, value } = props;

  return (
    <div className="row header">
      <div className="col-6 d-flex justify-content-center align-items-center">
        <img src={img} alt="" className="w-75 py-2 img1" />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center py-4">
        <h1>{title}</h1>
        <p>
          <span>Total Market: </span>
          <br />
          {`U$D ${(value === 0) ? '...' : parseInt(value, 10)}`}
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Header;
