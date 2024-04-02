<template>
    <div class="events-view">
        <div style="height:5vh; width:100vw; clear:both;"></div>

        <div class="events-page-title">
            <div style="font-size: 8vh;">— Upcoming Events —</div>
        </div>

        <div class="events-card-list">
            <EventCard v-for="(concert, index) in upcomingConcerts.concerts"
                :key="concert.id"
                :concert="concert"
                :concertId="index"
                :isUpcoming="true"
                :lastEvent="index == upcomingConcerts.concerts.length - 1"
            />
        </div>

        <div style="height:5vh; width:100vw; clear:both;"></div>

        <div class="events-page-title">
            <div style="font-size: 8vh;">— Past Events —</div>
        </div>
        
        <div>
            <!-- reverse the concert order while v-for -->
            <EventCard v-for="(concert, index) in pastConcerts.concerts.slice().reverse()"
                :key="concert.id"
                :concert="concert"
                :concertId="index"
                :isUpcoming="false"
                :lastEvent="index == pastConcerts.concerts.length - 1"
            />
        </div>

        <div class="events-page-title">
            <div style="font-size: 4vh;">- More Events Coming Soon -</div>
        </div>

        <div style="height:6vh; width:100vw; clear:both;"></div>
    </div>
</template>

<script>
import EventCard from './Events/EventCard.vue';
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
        height: 15vh; /* Set height as needed */
    }

    .events-cards-list {
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .events-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .separator{
        height: 15vh;
        width: 100vw;
    }
</style>