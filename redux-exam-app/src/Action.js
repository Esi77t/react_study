export const addTodo = (id, text) => ({
    type:'ADD_TODO',
    payload:{id:id, text:text}
});

export const removeTodo = (id) => ({
    type:'REMOVE_TODO',
    payload:id,
});