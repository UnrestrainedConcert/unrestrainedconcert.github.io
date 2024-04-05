<template>
    <div ref="concert_page_view" class="concert-page-view" v-if="isReady">
        <div class="concert-page-title great-vibes-regular">{{ concert.title }}</div>
        <div class="concert-page-poster">
            <div ref="concert_page_poster_img" class="concert-page-poster-img"><img :src="posterBlobUrl" alt="Concert Poster" ref="concert_page_main_poster" class="concert-page-main-poster-img computer"/></div>
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
                <ArticleView :article_title="'Programs'" :article_contents="program_list" :article_layer="0" :layer_hidden="1"/>
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
import { isMobile } from '@/global.js';
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
    mounted() {
        this.$nextTick(() => {
            this.responsiveDisplay();
            window.addEventListener('resize', this.responsiveDisplay);
        });
    },
    beforeUnmount() {
        // Revoke the Blob URL to free up memory
        URL.revokeObjectURL(this.posterBlobUrl);
    },
    methods: {
        async setConcertInfo(concert) {
            this.concert = concert;
            await this.setPosterBlobUrl();
            this.setIsReady();
            if (this.concert.programs_announced) this.setProgramList();
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

        /** 
         * composer (string), 
         * isSingleMvt (boolean), 
         * work (string), 
         * movements (list of strings, may contain only 1 element), 
         * template (string, options: solo, chamber, concerto, symphony), 
         * performers (list of strings, rule by template), 
         * description (string)
         */
        setProgram(id) {
            let subprogram = this.concert.programs[id];
            let work_subcontent;
            if (subprogram.isSingleMvt) {
                if (subprogram.movements === undefined)
                    work_subcontent = "";
                else
                    work_subcontent = subprogram.movements;
                work_subcontent = subprogram.movements;
            } else {
                work_subcontent = subprogram.movements.join("\n");
            }
            let work_subarticle = {
                article_title: "Movements",
                article_contents: work_subcontent
            };
            let performer_subarticle = {
                article_title: "Performers",
                article_contents: subprogram.performers.join("; ")
            };
            let description_subarticle = {
                article_title: "Description",
                article_contents: subprogram.description
            };
            let article_title = subprogram.composer + ": " + subprogram.work;
            return {
                article_title: article_title,
                article_contents: [work_subarticle, performer_subarticle, description_subarticle]
            }
        },
        setProgramList() {
            for (let i = 0; i < this.concert.programs.length; i++) {
                this.program_list.push(this.setProgram(i));
            }
        },
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
                    this.changeDevice(this.$refs.concert_page_view, true);
                    this.changeDevice(this.$refs.concertPosterImg, true);
                    this.changeDevice(this.$refs.concert_page_poster_img, true);
                });
            }
            else {
                this.$nextTick(() => {
                    this.changeDevice(this.$refs.concert_page_view, false);
                    this.changeDevice(this.$refs.concertPosterImg, false);
                    this.changeDevice(this.$refs.concert_page_poster_img, false);
                });
            }
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
.concert-page-view {
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.concert-page-view.desktop {
    width: 80vw;
}

.concert-page-view.mobile {
    width: 90vw;
}

.concert-page-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*font-family: 'Times New Roman', Times, serif;*/
    height: 7.0vh; /* Set height as needed */
    font-size: min(6vh, 6vw);
    margin-bottom: 3vh;
    margin-left: auto;
    margin-right: auto;
}


.concert-page-main-poster-img {
    height: auto;
    margin-left: auto;
    margin-right: auto;
    opacity: 0; /* Initially hidden */
    animation: expand 1.5s forwards;
    animation-name: expand;
    animation-duration: 1.5s;
}

.concert-page-main-poster-img.computer {
    max-width: 50vw;
}

.concert-page-main-poster-img.mobile {
    max-width: 85vw;
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
}

.concert-page-poster-img.compute {
    width: 57vw;
}

.concert-page-poster-img.mobile {
    width: 85vw;
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