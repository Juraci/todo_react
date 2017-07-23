import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => (
  <form onSubmit={ props.handleSubmit }>
  <input type="text" onChange={ props.handleInputChange } value={ props.currentTodo }/>
  </form>
)

Form.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
