import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => (
  <li key={ props.id }><input className="check-box" defaultChecked={ props.isComplete } type="checkbox"/> { props.name }</li>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default Item;
