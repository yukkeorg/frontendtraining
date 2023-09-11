<template>
<main id="main">
    <div id="messages">
        <ul>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>

        </ul>
    </div>
    <inputText />
</main>
</template>

<script>
import InputText from './InputText.vue';

export default {
    name: 'MainView',
    components: {
        InputText
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

    #messages {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;

        padding: 10px;
    }
}
</style>