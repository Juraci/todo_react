import { addTodo, findById, toggleTodo } from './todoHelpers';

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

test('findById should return the expected item from an array', () => {

  const startTodos = [
    { id: 1, name: 'first', isComplete: true },
    { id: 2, name: 'second', isComplete: false },
    { id: 3, name: 'three', isComplete: false},
  ];

  const expected = { id: 3, name: 'three', isComplete: false };

  expect(findById(3, startTodos)).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a toto', () => {
    const startTodo = { id: 2, name: 'two', isComplete: false };
    const expected = { id: 2, name: 'two', isComplete: true };

    expect(toggleTodo(startTodo)).toEqual(expected);
});
