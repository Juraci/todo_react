import React from 'react';

const Item = (props) => (
  <li key={ props.id }><input className="check-box" defaultChecked={ props.isComplete } type="checkbox"/> { props.name }</li>
);

export default Item;
