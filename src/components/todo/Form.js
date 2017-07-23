import React from 'react';

const Form = (props) => (
  <form>
  <input type="text" onChange={ props.handleInputChange } value={ props.currentTodo }/>
  </form>
)

export default Form;
