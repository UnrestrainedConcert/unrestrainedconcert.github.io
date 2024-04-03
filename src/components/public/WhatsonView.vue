<template>
    <div class="whatson-view">
        <div class="whatson-page-title">What's on next</div>
        <ConcertView class="whatson-concert" :concert="concertinfo"/>
        <div style="height:20vh; width:100vw; clear:both;"></div>
    </div>
</template>

<script>
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
            concertinfo
        };
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
    font-size: 2vh;
    margin-top: 3vh;
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