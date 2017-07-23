import React from 'react';
import Item from './item';

const List = (props) => (
  <div className="Todo-List">
    <ul>
      {
        props.todos.map(todo => <Item  key={todo.id} {...todo}/>)
      }
    </ul>
  </div>
)

export default List;
