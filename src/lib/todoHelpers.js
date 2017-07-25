const addTodo = (list, item) => [...list, item];

const findById = (id, list) => list.find(item => item.id === id); 

export { addTodo, findById };
