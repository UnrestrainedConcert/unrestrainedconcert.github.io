<template>
    <div class="BrianGuo">
        <div class="bgcolor">
        </div>
        <div class="background" v-for="(image,index) in images" :key="index">
        <!-- "{ opacity: image.current_opacity }"> -->
            <img
                :ref="'image'+index"
                :src="image.blob"
                class="bgimage"
                :style="{ opacity: current_opacity[index] }"
            />
            <div class="gradient-0"
                v-if="index == 0">
                <!-- && scrollValue <= images[index].end_fade"> -->
            </div>
        </div>
        <div class="content-0">
            <div class="content-0-text">
                <div class="content-0-title" v-if="contents[0].title.show">{{contents[0].title.text}}</div>
                <div class="content-0-subtitle" v-if="contents[0].subtitle.show">{{contents[0].subtitle.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BrianGuo',
    props: {
        scrollValue: Number,
    },
    data() {
        return {
            /** 
              * images: array of json containing information of images
              * 
              * each images[?]:
              *     blob: image source
              *     start_appear: scroll value when image starts to appear, opacity=0
              *     end_appear: scroll value when image is fully visible, opacity=1
              *     start_fade: scroll value when image starts to fade, opacity=1
              *     end_fade: scroll value when image is fully faded, opacity=0
              */
            images: [
                {
                    blob: require("@/assets/about/people/Brian/Brian_main_clip.png"),
                    start_appear: null,
                    end_appear: null,
                    start_fade: 400,
                    end_fade: 500,
                },
                {
                    blob: require("@/assets/about/people/Brian/Brian_conduct_colored.png"),
                    start_appear: 400,
                    end_appear: 500,
                    start_fade: 800,
                    end_fade: 900,
                },
                {
                    blob: require("@/assets/about/people/Brian/Brian_conduct_bw.png"),
                    start_appear: 800,
                    end_appear: 900,
                    start_fade: 1200,
                    end_fade: 1300,
                },
                {
                    blob: require("@/assets/about/people/Brian/Brian_piano_colored.png"),
                    start_appear: 1200,
                    end_appear: 1300,
                    start_fade: 1600,
                    end_fade: 1700,
                },
                {
                    blob: require("@/assets/about/people/Brian/Brian_piano_bw.png"),
                    start_appear: 1600,
                    end_appear: 1700,
                    start_fade: null,
                    end_fade: null,
                }
            ],
            current_opacity: [1.0, 0.0, 0.0, 0.0, 0.0],
            srcIndex: 0,
            // contents[?]: {title: {text, show, scroll}, subtitle: {text, show, scroll}}
            contents: [
                {
                    title: {
                        text: 'Brian Guo',
                        show: false,
                        scroll: 100,
                    },
                    subtitle: {
                        text: 'URFO Music Director since 2023',
                        show: false,
                        scroll: 200,
                    }
                }
            ]
        };
    },
    mounted() {
        // change headerState of HeaderView to 10
        this.$emit('headerState', 10);
        console.log('BrianGuo emitted headerState 10');
        this.$watch('scrollValue', (newValue, oldValue) => {
            console.log('BrianGuo scrollValue changed from ' + oldValue + ' to ' + newValue);
            this.changeContentVisibility(this.contents[0].title, newValue);
            this.changeContentVisibility(this.contents[0].subtitle, newValue);
            // this.handleImage(newValue);
        });
    },
    beforeUnmount() {
        // change headerState of HeaderView to 0
        this.$emit('headerState', 0);
    },
    methods: {
        changeContentVisibility(content, scroll) {
            if (content.show && scroll < content.scroll) {
                content.show = false;
            } else if (!content.show && scroll >= content.scroll) {
                content.show = true;
            }
        },
        handleImage(scroll) {
            for (let i = 0; i < this.images.length; i++) {
                // let image = this.$refs['image' + i];
                // if (i==0) image.current_opacity = 0.0;
                // else image.current_opacity = 1.0;
                let new_opacity = 0.0;
                if (this.images[i].start_appear != null && scroll <= this.images[i].start_appear) {
                    new_opacity = 0.0;
                } else if (this.images[i].end_appear != null && scroll <= this.images[i].end_appear) {
                    new_opacity = (scroll - this.images[i].start_appear) * 1.0 / (this.images[i].end_appear - this.images[i].start_appear);
                } else if (this.images[i].start_fade == null) {
                    new_opacity = 1.0;
                } else if (scroll <= this.images[i].start_fade) {
                    new_opacity = 1.0;
                } else if (this.images[i].end_fade == null) {
                    new_opacity = 1.0;
                } else if (scroll <= this.images[i].end_fade) {
                    new_opacity = 1.0 - (scroll - this.images[i].start_fade) * 1.0 / (this.images[i].end_fade - this.images[i].start_fade);
                } else {
                    new_opacity = 0.0;
                }
                this.current_opacity[i] = new_opacity;
                console.log('BrianGuo image' + i + ' opacity: ' + new_opacity + ' at scroll ' + scroll);
            }
        }
    }
};
</script>

<style scoped>
.BrianGuo {
    background-color: #000000;
}
.bgcolor {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #000000;
}
.background {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    position: absolute;
}
.bgimage {
    height: 100vh;
    width: auto;
    margin-left: auto;
    margin-right: 0;
}

.gradient-0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, 
        rgba(0, 0, 0, 1) 0%, 
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0.75) 60%,
        rgba(0, 0, 0, 0.50) 72.5%,
        rgba(0, 0, 0, 0.25) 85%,
        rgba(0, 0, 0, 0) 100%);
}

.content-0 {
    position: absolute;
    top: 75vh;
    left: 25vw;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
}

.content-0-title {
    font-size: min(10vh, 30vw);
}

.content-0-subtitle {
    margin-top: 2.5vh;
    font-size: min(3vh, 10vw);
}
</style>