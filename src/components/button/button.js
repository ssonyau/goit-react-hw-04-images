import PropTypes from 'prop-types';
import css from '../button/button.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.ButtonWrapper}>
      <button type="button" className={css.Button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
