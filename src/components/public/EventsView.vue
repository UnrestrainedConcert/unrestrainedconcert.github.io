<template>
    <div class="events-view">
        <div style="height:5vh; width:100vw; clear:both;"></div>

        <div class="events-page-title">
            <div style="font-size: min(8vh, 5vw);">— Upcoming Events —</div>
        </div>

        <div class="events-card-list">
            <EventCard v-for="(concert, index) in upcomingConcerts.concerts"
                class="events-card"
                :key="concert.id"
                :concert="concert"
                :concertId="index"
                :isUpcoming="true"
                :lastEvent="index == upcomingConcerts.concerts.length - 1"
                :firstEvent="index == 0"
            />
        </div>

        <div style="height:5vh; width:100vw; clear:both;"></div>

        <div class="events-page-title">
            <div style="font-size: min(8vh, 5vw);">— Past Events —</div>
        </div>
        
        <div>
            <!-- reverse the concert order while v-for -->
            <EventCard v-for="(concert, index) in pastConcerts.concerts.slice().reverse()"
                :key="concert.id"
                :concert="concert"
                :concertId="index"
                :isUpcoming="false"
                :lastEvent="index == pastConcerts.concerts.length - 1"
                :firstEvent="index == 0"
            />
        </div>

        <div class="events-page-title">
            <div style="font-size: min(4vh, 4vw);">- More Events Coming Soon -</div>
        </div>

        <div style="height:6vh; width:100vw; clear:both;"></div>
    </div>
</template>

<script>
import EventCard from './widgets/EventCard.vue';
import pastConcerts from '@/assets/concerts/past.json';
import upcomingConcerts from '@/assets/concerts/upcoming.json';
export default {
    name: 'EventsView',
    components: {
        EventCard
    },
    data() {
        return {
            pastConcerts,
            upcomingConcerts
        };
    },
};
</script>

<style scoped>
    /* Add your styles here */
    .events-view {
        width: 60vw;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .events-page-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Times New Roman', Times, serif;
        height: min(15vh, 10vw); /* Set height as needed */
    }

    .events-cards-list {
        justify-content: center;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }

    .events-card {
        margin-left: auto;
        margin-right: auto;
    }

    .separator{
        height: 15vh;
        width: 100vw;
    }
</style>