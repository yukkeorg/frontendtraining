<template>
  <div id="app">
    <SidebarView />
    <MainView />
</div>
</template>

<script>
import SidebarView from './components/SidebarView.vue';
import MainView from './components/MainView.vue';
import '@acab/reset.css';

export default {
  name: 'App',
  components: {
    SidebarView,
    MainView,
  }
}
</script>

<style>
#app {
  display: flex;
}
</style>
