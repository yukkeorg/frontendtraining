import Storage from '@/api/storage.js';

export default {
    namespaced: true,
    state: () => {
        return {
            id: 0,
            selected: "",
            todos: [],
        }
    },
    getters: {
        allTodos: (state) => {
            return state.todos;
        },
        selected: (state) => {
            return state.selected;
        },
    },
    mutations: {
        pushTodo: (state, task) => {
            state.todos.unshift({
                id: state.id,
                task: task,
                checked: false
            });
        },
        removeTodo: (state, todo) => {
            state.todos = state.todos.filter((origin) => origin.id !== todo.id);
        },
        toggleCheck: (state, todo) => {
            const targetTodo = state.todos.find((origin) => origin.id === todo.id);
            targetTodo.checked = !targetTodo.checked;
        },
        setSelected: (state, selected) => {
            state.selected = selected;
        },
        incrementId: (state) => {
            state.id++;
        },
        loadTodos: (state) => {
            state.todos = Storage.fetchTodo();
            state.id = state.todos.length;
        },
        saveTodos: (state) => {
            Storage.saveTodo(state.todos);
        }
    },
    actions: {
        addTodo: (context, task) => {
            context.commit('pushTodo', task);
            context.commit('incrementId');
            context.commit('saveTodos');
        },
        deleteTodo: (context, todo) => {
            context.commit('removeTodo', todo);
            context.commit('saveTodos');
        },
        changeSelected: (context, channel) => {
            context.commit('setSelected', channel);
        },
        loadTodos: (context) => {
            context.commit('loadTodos');
        },
    }
}