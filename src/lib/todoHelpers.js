const addTodo = (list, item) => [...list, item];

const findById = (id, list) => list.find(item => item.id === id);

const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export { addTodo, findById, toggleTodo };
