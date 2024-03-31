<template>
  <div id="app">
    <HeaderView />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderView from './components/HeaderView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderView
  }
});
</script>

<style>
/* Add your global styles here */
</style>
