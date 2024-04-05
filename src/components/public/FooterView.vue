<template>
    <footer ref="footer" class="footer">
        <div ref="container" class="container">
            <div ref="webcopy" class="website-copyright">
                &copy; 2021-2024 Unrestrained Festival Orchestra. All rights reserved.
            </div>
            <div ref="postercopy" class="poster-copyright">
                Unrestrained Poster for 2022 & 2023 &copy; Crystal Cheng. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script>
import { isMobile } from '@/global.js';
export default {
    name: 'FooterView',
    mounted() {
        this.responsiveDisplay();
        window.addEventListener('resize', this.responsiveDisplay);
    },
    methods: {
        changeDevice(ref, toMobile) {
          if (ref === undefined || ref == null) return;
          if (ref.classList == undefined || ref.classList == null) return;
          if (toMobile) {
              if (ref.classList.contains('computer')) {
                  ref.classList.remove('computer');
                  ref.classList.add('mobile');
              }
              else {
                  ref.classList.add('mobile');
              }
          }
          else {
              if (ref.classList.contains('mobile')) {
                  ref.classList.remove('mobile');
                  ref.classList.add('computer');
              }
              else {
                  ref.classList.add('computer');
              }
          }
      },
      responsiveDisplay() {
          // Responsive display
          if (isMobile) {
            this.$nextTick(() => {
                this.changeDevice(this.$refs.footer, true);
                this.changeDevice(this.$refs.container, true);
                this.changeDevice(this.$refs.webcopy, true);
                this.changeDevice(this.$refs.postercopy, true);
            });
          }
          else {
            this.$nextTick(() => {
                this.changeDevice(this.$refs.footer, false);
                this.changeDevice(this.$refs.container, false);
                this.changeDevice(this.$refs.webcopy, false);
                this.changeDevice(this.$refs.postercopy, false);
            });
          }
        }
    }
};
</script>

<style scoped>
.footer {
    background-color: black;
    color: white;
    padding: 1.3vh;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
}

.footer.computer {
    height: 5vh;
}

.footer.mobile {
    height: 12vh;
}

.container {
    margin-top: 0.3vh;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container.computer {
    max-width: 50vw;
}

.container.mobile {
    max-width: 90vw;
}

.copyright.computer {
    font-size: 1.2vh;
}

.copyright.mobile {
    font-size: 0.7vh;
}

.website-copyright {
    margin-bottom: 0.3vh;
}
</style>