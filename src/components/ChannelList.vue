<template>
<div id="channellist">
    <div class="channel-item" v-for="channel in channels" :key="channel">
        <span>{{ channel }}</span>
    </div>
</div>
</template>
    
<script>
export default {
    name: "ChannelList",
    data: () => {
        return {
            channels: [
                "一般"
            ]
        };
    }
}
</script>

<style>
.channel-item {
    color: #aaaaaa;
    padding: 10px;

    &:hover {
        background-color: #666666;
    }

    .active {
        font-weight: bold;
    }
}
</style>