import PropTypes from 'prop-types';

const Header = (props) => {
  const { img, title, value } = props;

  return (
    <div className="row">
      <img src={img} alt="" className="col-6" />
      <div className="col-6">
        <h2>{title}</h2>
        <p>
          <span>Total Market: U$D </span>
          {(value === 0) ? '...' : value}
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
