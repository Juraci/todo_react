import React from 'react';

const Item = (props) => (
  <li key={ props.todo.id }><input className="check-box" defaultChecked={ props.todo.isComplete } type="checkbox"/> { props.todo.name }</li>
);

export default Item;
