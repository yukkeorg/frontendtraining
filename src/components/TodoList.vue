<template>
<div id="todolist">
    <div v-for="todo in todos" :key="todo.id" class="todoitem">
        <input type="checkbox" @change="onChangeCheck(todo)" />
        <span>{{ todo.task }}</span>
        <button @click="onDeleteTodo(todo)">削除</button>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "TodoList",
    computed: {
        ...mapGetters('todos', {
            todos: 'allTodos',
        }),
    },
    methods: {
        onChangeCheck(todo) {
            this.$store.dispatch("todos/toggleCheck", todo);
        },
        onDeleteTodo(todo) {
            this.$store.dispatch("todos/deleteTodo", todo);
        }
    }
}
</script>

<style lang="scss" scoped>
#todolist {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px;

    display: flex;
    flex-direction: column-reverse;

    .todoitem {
        padding: 10px;
        margin-bottom: 10px;
        color: #ffffff;

        border: 1px #666666 solid;
        border-radius: 4px;

        span {
            display: inline-block;
            margin-left: 1em;
            margin-right: 1em;
        }

        button {
            padding: 2px 1em;;
        }
    }
}
</style>