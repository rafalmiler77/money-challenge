import PropTypes from 'prop-types';

const validationPropType = {
  validate: PropTypes.func,
  errors: PropTypes.any,
  getErrorFor: PropTypes.func
};

export default validationPropType;
