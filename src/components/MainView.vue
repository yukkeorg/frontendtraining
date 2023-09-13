<template>
<main id="main">
    <TodoList />
    <AddTodo />
</main>
</template>

<script>
import AddTodo from './AddTodo.vue';
import TodoList from './TodoList.vue';

export default {
    name: 'MainView',
    components: {
        TodoList,
        AddTodo,
    }
}
</script>

<style lang="scss" scoped>
#main {
    position: relative;
    height: 100vh;
    background-color: #444;
    width: calc(100vw - 240px);

    display: flex;
    flex-direction: column;
}
</style>