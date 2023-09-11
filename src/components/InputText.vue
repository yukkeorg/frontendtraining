<template>
    <div id="inputText">
        <div class="inputTextArea">
            <input type="text" id="text" name="text">
        </div>
        <div class="SendButtonArea">
            <button id="send">送信</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputText",
}
</script>

<style lang="scss" scoped>
#inputText {
    display: flex;
    // width: 100%;
    padding: 10px;

    .inputTextArea {
        flex: 1 0 auto;
        #text {
            width: 100%; 
        }
    }

    .SendButtonArea {
        flex: 0 0 auto;

        #send {
            width: 4em;
        }
    }
}
</style>