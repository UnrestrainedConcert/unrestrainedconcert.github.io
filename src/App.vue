<template>
  <div id="app" ref="el">
    <div ref="header" class="header" @click="scrollToTop" :style="{ opacity: headerOpacity }">
      <HeaderView/>
    </div>
    <div class="router-content"><router-view/></div>
    <div ref="footer" class="footer">
      <FooterView/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderView from './components/public/HeaderView.vue';
import FooterView from './components/public/FooterView.vue';
// import { useResizeObserver } from '@vueuse/core';

export default defineComponent({
  name: 'App',
  components: {
    HeaderView, FooterView
  }, 
  data() {
    return {
      headerOpacity: 1,
      elheight: 0
    }
  },
  async mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // poll on refs until it is defined
    while (this.$refs === undefined) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    // set watch on refs.el.clientHeight, when it changes, run footerSticky and handleScroll
    this.$watch(() => this.$refs.el.clientHeight, 
      () => {
        this.footerSticky();
        window.removeEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleScroll);
      }
    );
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    updateElHeight() {
      this.elheight = this.$refs.el.clientHeight;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      let clientHeight = this.$refs.el.clientHeight;
      if (clientHeight === null || clientHeight === undefined) {
        clientHeight = 0;
      }
      const minScroll = Math.max((1/30) * clientHeight, 10); // Start fading out at this point
      const maxScroll = Math.max((1/5) * clientHeight, 2 * minScroll); // Fully transparent at this point
      const opacity = Math.min(1, Math.max(0, 1 - ((scrollPosition - minScroll) / (maxScroll - minScroll))));
      this.headerOpacity = opacity;

      if (opacity < 0.01) {
        this.$refs.header.style.pointerEvents = 'none'; // Disable pointer events
      } else if (opacity > 0.02) {
        this.$refs.header.style.pointerEvents = 'auto'; // Enable pointer events
      }
    },
    footerSticky() {
      this.updateElHeight();
      if (this.elheight < window.innerHeight) {
        this.$refs.footer.classList.add('sticky-footer');
      } else {
        this.$refs.footer.classList.remove('sticky-footer');
      }
    }
  },
});
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

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
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 0;
  top: 0;
  left: 0;
}

.router-content {
  flex: 1;
  z-index: 0;
  min-height: 68.5vh;
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
  height: 21.75vh;
}

.footer {
  height: 5vh;
}

.sticky-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
}

router-view {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  z-index: 0;
}

</style>