<template>
    <div class="whatson-view">
        <div class="whatson-page-title" :class="{'mobile': isMobile}">What's on next</div>
        <ConcertView ref="concertview" class="whatson-concert" :isUpcoming="true"/>
        <div style="height:20vh; width:100vw; clear:both;"></div>
    </div>
</template>

<script>
import { isMobile } from '@/global.js';
import ConcertView from './widgets/ConcertView.vue';
import concertinfo from '@/assets/upcoming/upcoming.json';
export default {
    name: 'WhatsonView',
    // Your component's logic here
    components : {
        ConcertView
    },
    data() {
        return {
            concertinfo,
            isMobile: isMobile
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.concertview.setConcertInfo(this.concertinfo);
        });
        this.$watch(() => isMobile, (newVal) => {
            this.isMobile = newVal;
        });
    }
}
</script>

<style scoped>
.whatson-view {
    width: 80vw;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.whatson-page-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    height: 3vh; /* Set height as needed */
    font-size: min(2vh, 2vw);
    margin-top: 3vh;
}

.whatson-page-title.mobile {
    margin-bottom: 3vh;
}

.whatson-concert {
    margin-left: auto;
    margin-right: auto;
    width: 57vw;
}

.great-vibes-regular {
    font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
}

.dancing-script-title {
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
}

.noto-serif {
    font-family: "Noto Serif TC", serif;
    font-weight: 400;
    font-style: normal;
}
</style>