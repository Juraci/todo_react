import React from 'react';

const List = (props) => (
  <div className="Todo-List">
    <ul>
      {
        props.todos.map(todo =>
          <li key={ todo.id }><input className="check-box" defaultChecked={ todo.isComplete } type="checkbox"/> { todo.name }</li> )
      }
    </ul>
  </div>
)

export default List;
