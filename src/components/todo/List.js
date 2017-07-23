import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const List = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        { props.todos.map(todo => <Item  key={todo.id} {...todo}/>) }
      </ul>
    </div>
  );
};

List.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default List;
