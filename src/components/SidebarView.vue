<template>
<aside id="sidebar">
    <AppLogo />
    <ChannelList />
</aside>
</template>

<script>
import AppLogo from './AppLogo.vue';
import ChannelList from './ChannelList.vue';

export default {
    name: 'SidebarView',
    components: {
        AppLogo,
        ChannelList
    }
}
</script>

<style lang="scss" scoped>
#sidebar {
    position: relative;
    height: 100vh;
    border: 2px solid #444;
    background-color: #555;
    min-width: 240px;
    width: 240px;
}
</style>