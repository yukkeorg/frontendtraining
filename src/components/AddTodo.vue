<template>
    <div id="inputText">
        <div class="inputTextArea">
            <input type="text" id="text" name="text" v-model="newTodo" @keypress.enter="onEnterPress" placeholder="予定を入力してEnterで追加" >
        </div>
    </div>
</template>

<script>

export default {
    name: "AddTodo",
    data: () => {
        return {
            newTodo: "",
        }
    },
    methods: {
        onEnterPress: function() {
            this.$store.dispatch("todos/addTodo", this.newTodo);
            this.newTodo = "";
        }
    }
}
</script>

<style lang="scss" scoped>
#inputText {
    display: flex;
    padding: 10px;

    .inputTextArea {
        flex: 1 0 auto;
        #text {
            width: 100%; 
        }
    }
}
</style>