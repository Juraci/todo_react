const addTodo = (list, item) => [...list, item];

const findById = (id, list) => list.find(item => item.id === id);

const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

const updateTodo = (list, item) => {
    const todoToUpdate = findById(item.id, list);
    const updatedTodo = Object.assign(todoToUpdate, item);
    return list.map((i) => {
      return i.id === updatedTodo.id ? updatedTodo : i;
    });
};

export { addTodo, findById, toggleTodo, updateTodo };
