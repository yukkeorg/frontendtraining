const STORAGE_KEY = "frontendTraining_todd";

export const fetch = () => {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    todos.forEach((todo, index) => {
        todo.id = index;
    });
    return todos;
};

export const save = (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
} 