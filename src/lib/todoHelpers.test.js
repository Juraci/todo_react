import { addTodo } from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    { id: 1, name: 'first', isComplete: true },
  ];

  const newTodo = { id: 3, name: 'three', isComplete: false }

  const result = addTodo(startTodos, newTodo);
  const expected = [
    { id: 1, name: 'first', isComplete: true },
    { id: 3, name: 'three', isComplete: false},
  ];
  
  expect(result).toEqual(expected);
});
