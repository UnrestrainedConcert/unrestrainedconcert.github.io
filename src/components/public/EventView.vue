<template>
    <div class="event-view">
        <div class="event-page-title">Unrestrained History Concerts</div>
        <ConcertView ref="concertview" class="event-concert"/>
        <div style="height:20vh; width:100vw; clear:both;"></div>
    </div>
</template>

<script>
import ConcertView from './widgets/ConcertView.vue';
export default {
    name: 'EventView',
    components : {
        ConcertView,
    },
    data() {
        return {
            concertinfo: null,
        };
    } ,
    props: {
        concertTitle: String,
    },
    mounted() {
        this.concertinfo = require('@/assets/past/' + this.concertTitle + '.json');
        this.$nextTick(() => {
            this.$refs.concertview.setConcertInfo(this.concertinfo);
        });
    }
}
</script>

<style scoped>
.event-view {
    width: 80vw;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.event-page-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    height: 3vh; /* Set height as needed */
    font-size: 2vh;
    margin-top: 3vh;
}

.event-concert {
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