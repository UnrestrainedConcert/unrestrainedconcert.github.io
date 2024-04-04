<template>
  <div id="app" ref="el">
    <div ref="header" class="header" @click="scrollToTop" :style="{ opacity: headerOpacity }">
      <HeaderView class="header-view"/>
    </div>
    <div class="router-content">
      <router-view/>
    </div>
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
      elheight: 0,
      isSecureTab: false  // when secure, elheight should be changed manually
    }
  },
  // when the component is mounted onto page (not setup)
  async mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // poll on refs until it is defined, since it only takes a few ticks it is ok to poll.
    while (this.$refs === undefined) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    // set watch on refs.el.clientHeight, when it changes, run footerSticky and handleScroll
    this.$watch(() => this.$refs.el.clientHeight, 
      () => {
        this.footerSticky();
        // actually I doubt whether this is useful, maybe it is unnecessary.
        window.removeEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleScroll);
      }
    );
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  // define functions here
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

      // there is an 0.01 buffer zone, so that there won't be frequent oscillation in a tiny change.
      if (opacity < 0.01) {
        this.$refs.header.style.pointerEvents = 'none';
      } else if (opacity > 0.02) {
        this.$refs.header.style.pointerEvents = 'auto';
      }
    },
    footerSticky() {
      this.updateElHeight();
      if (this.elheight < window.innerHeight) {
        this.$refs.footer.classList.add('sticky-footer');
      } else {
        console.log("footer is not sticky");
        this.$refs.footer.classList.remove('sticky-footer');
      }
    }
  },
});
</script>

<style>

/* global fonts data */
@import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');             /* First UNRESTRAINED font, the one with tech style */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');  /* Quite un-aligned font, not in use now */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap');                 /* Formal (Traditional) Chinese Form */
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');                   /* A good Cursive font used in events and what's on */
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');                       /* Second UNRESTRAINED font, cursive but ok */

.urfo-red {
  color: #b20000;
}

.urfo-orange {
  color: #ff6638;
}

/* The blue color is deprecated in Unrestrained, try to use red, orange, black, white only */
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

/* z-index is set large to make it guaranteed to be sticky */
.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #ffffff;
  width: 100vw;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

header-view {
  display: inline-block;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-height: 100%;
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