<template>
  <div id="app">
    <div ref="header" class="header" @click="scrollToTop" :style="{ opacity: headerOpacity }">
      <HeaderView/>
    </div>
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
  },
  data() {
    return {
      headerOpacity: 1
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      const minScroll = 100; // Start fading out at this point
      const maxScroll = 600; // Fully transparent at this point
      const opacity = Math.min(1, Math.max(0, 1 - ((scrollPosition - minScroll) / (maxScroll - minScroll))));
      this.headerOpacity = opacity;

      if (opacity < 0.01) {
        this.$refs.header.style.pointerEvents = 'none'; // Disable pointer events
      } else if (opacity > 0.02) {
        this.$refs.header.style.pointerEvents = 'auto'; // Enable pointer events
      }
    },
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

.app {
  height: 100vh;
  width: 100vw;
  z-index: 0;
  top: 0;
  left: 0;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #ffffff;
  width: 100vw;
}

router-view {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  z-index: 0;
}

</style>