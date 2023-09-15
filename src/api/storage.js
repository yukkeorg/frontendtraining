const STORAGE_KEY = "frontendTraining_todd";

export default {
    fetchTodo: () => {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
        todos.forEach((todo, index) => {
            todo.id = index;
        });
        return todos;
    },
    saveTodo: (todos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};