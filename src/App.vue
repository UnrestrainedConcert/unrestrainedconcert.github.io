<template>
  <div id="app">
    <HeaderView />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderView from './components/public/HeaderView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderView
  }
});
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');

.urfo-red {
  color: #b20000;
}

.urfo-orange {
  color: #ff6638;
}

.urfo-blue {
  color: #0032c9;
}

</style>