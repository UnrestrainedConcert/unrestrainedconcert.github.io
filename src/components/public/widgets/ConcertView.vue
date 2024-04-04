<template>
    <div class="concert-page-view" v-if="isReady">
        <div class="concert-page-title great-vibes-regular">{{ concert.title }}</div>
        <div class="concert-page-poster">
            <div class="concert-page-poster-img"><img :src="posterBlobUrl" alt="Concert Poster" class="concert-page-main-poster-img"/></div>
            <div class="concert-page-poster-caption">{{ concert.posterCaption }}</div>
        </div>
        <div class="concert-page-overview-article">
            <ArticleView :article_title="'Overview'" :article_contents="concert.description" :article_layer="0"/>
        </div>
        <!-- Program -->
        <div class="concert-page-articles">
            <div class="concert-page-program-article" v-if="!concert.programs_announced">
                <ArticleView :article_title="'Programs'" :article_contents="'Programs will be announced in ' + concert.programs_announce_date.toString()" :article_layer="0"/>
            </div>
            <div class="concert-page-program-article" v-else>
                <ArticleView :article_title="'Programs'" :article_contents="program_list" :article_layer="0"/>
                <!-- <li v-for="program in concert.programs" :key="program.title">
                    <h3>{{ program.title }}</h3>
                    <p>Composer: {{ program.composer }}</p>
                    <p>Duration: {{ program.duration }}</p>
                </li> -->
            </div>
            <!-- Schedule -->
            <div class="concert-page-schedule-article">
                <ArticleView
                    :article_title="'Schedule'"
                    :article_contents="''"
                    :article_layer="0"/>
                <ScheduleView
                    :DateContent="concert.date"
                    :TimeContent="concert.time"
                    :LengthContent="concert.duration"
                    :LocationContent="concert.location"
                    :isDateTentaive="concert.tentative[concert.DATE_ID]"
                    :isTimeTentative="concert.tentative[concert.TIME_ID]"
                    :isLengthEstimated="concert.tentative[concert.DURATION_ID]"
                    :isLocationTentative="concert.tentative[concert.LOCATION_ID]"
                    />
            </div>
            <!-- 
            <div class="concert-page-musician-article">
                <ArticleView :article_title="'Musicians'" :article_contents="musicians_list" :article_layer="0"/>
                
                    <p>Conductor: {{ concert.conductor }}</p>
                    <h2>Artists</h2>
                    <ul>
                        <li v-for="artist in concert.artists" :key="artist[0]">
                            {{ artist[0] }} - {{ artist[1] }}
                        </li>
                    </ul>
                
            </div>
            -->
        </div>
    </div>
</template>

<script>
import ArticleView from './ArticleView.vue';
import ScheduleView from './ScheduleView.vue';
export default {
    name: 'ConcertView',
    components: {
        ArticleView, ScheduleView
    },
    data() {
        return {
            posterBlobUrl: '',
            program_list: [],
            musicians_list: [],
            isReady: false,
            concert: null,
        };
    },
    async mounted() {
        // Fetch the image file as a Blob
    },
    beforeUnmount() {
        // Revoke the Blob URL to free up memory
        URL.revokeObjectURL(this.posterBlobUrl);
    },
    methods: {
        async setConcertInfo(concert) {
            console.log("setConcertInfo")
            this.concert = concert;
            await this.setPosterBlobUrl();
            this.setIsReady();
        },
        async setPosterBlobUrl() {
            const path = `/details/upcoming/${this.concert.posterLink}`;
            const response = await fetch(path);
            const blob = await response.blob();
            this.posterBlobUrl = URL.createObjectURL(blob);
        },
        setIsReady() {
            this.isReady = true;
        }, 
    }
};
</script>

<style scoped>
/* Add your custom styles here */
.concert-page-view {
    width: 80vw;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.concert-page-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*font-family: 'Times New Roman', Times, serif;*/
    height: 6vh; /* Set height as needed */
    font-size: 5vh;
    margin-bottom: 3vh;
    margin-left: auto;
    margin-right: auto;
}


.concert-page-main-poster-img {
    max-width: 50vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    opacity: 0; /* Initially hidden */
    animation: expand 1.5s forwards;
    animation-name: expand;
    animation-duration: 1.5s;
}

@keyframes expand {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
    opacity: 1; /* Show image */
  }
}

.concert-page-poster-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 57vw;
}

.concert-page-poster-caption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    height: 3vh; /* Set height as needed */
    font-size: 2vh;
    margin-top: 1vh;
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.concert-page-articles {
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.concert-page-overview-article {
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.concert-page-program-article {
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.concert-page-schedule-article {
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
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