<template>
  <div id="home">
    <SidebarView />
    <MainView />
  </div>
</template>

<script>
import MainView from '@/components/MainView.vue';
import SidebarView from '@/components/SidebarView.vue';

export default {
  name: 'HomeView',
  components: {
    SidebarView,
    MainView,
  }
};
</script>

<style>
#home {
  display: flex;
}
</style>