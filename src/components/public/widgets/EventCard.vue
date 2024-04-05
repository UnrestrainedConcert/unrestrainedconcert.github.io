<template>
    <div v-if="isMobile">
        <div style="height:5vh; width:100vw; clear:both;"></div>
    </div>
    <div ref="card" class="card hover-scale computer" @mouseover="isHovered=true" @mouseleave="isHovered=false" @click="navigateToEvent">
        <div ref="cardContent" class="card-content computer" :class="{ 'reverse': concertId % 2 === 1 }">
            <div ref="cardPoster" class="poster">
                <img ref="posterImg" :src="posterBlobUrl" alt="Concert Poster" class="card-main-poster" :class="{ 'reverse': concertId % 2 === 1 }"/>
            </div>
            <div ref="cardDetail" class="event-card-detail" :class="{ 'reverse': concertId % 2 === 1}">
                <div ref="title" class="event-card-title great-vibes-regular" :class="{ 'reverse': concertId % 2 === 1 }">{{ displayTitle }}</div>
                <div ref="subtitle" class="event-card-subtitle">{{ displaySubtitle }}</div>
                <!-- white-space: pre-line allows treating '\n' as new-line. -->
                <div ref="description" class="event-card-description noto-serif" style="white-space: pre-line">{{ displayDiscription }}</div>
            </div>
        </div>
    </div>
    <div class="separate-line" v-if="!lastEvent">
        <hr ref="cardHr" class="line-between">
    </div>
    <div v-else-if="isMobile">
        <div style="height:5vh; width:100vw; clear:both;"></div>
    </div>
    </template>

<script>
import {isMobile} from '@/global.js';
export default {
    name: 'EventCard',
    props: {
        isUpcoming: Boolean,
        concert: Object,
        concertId: Number, 
        lastEvent: Boolean,
        firstEvent: Boolean
    },
    data() {
        return {
            posterBlobUrl: '',
            isHovered: false,
            displayTitle: this.concert.title,
            displaySubtitle: this.concert.subtitle,
            displayDiscription: this.concert.description,
            isMobile: isMobile
        };
    },
    methods: {
        onHover() {
            this.$refs.title.classList.add('event-card-title-hover')
        },
        offHover() {
            if (this.$refs.title.classList.contains('event-card-title-hover'))
                this.$refs.title.classList.remove('event-card-title-hover')
        },
        async navigateToEvent() {
            // upcoming: go to /whatson defined in main.js
            if (this.isUpcoming) {
                this.$router.push({ name: 'whatson' });
            }
            else {
                this.$router.push({ name: 'event', query: { concertTitle: this.concert.detailJson } });
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
                this.displayTitle = this.concert.short_title;
                this.displaySubtitle = this.concert.short_subtitle;
                this.displayDiscription = this.concert.short_description;
                this.$nextTick(() => {
                    this.changeDevice(this.$refs.cardContent, true);
                    this.changeDevice(this.$refs.card, true);
                    this.changeDevice(this.$refs.title, true);
                    this.changeDevice(this.$refs.posterImg, true);
                    this.changeDevice(this.$refs.cardDetail, true);
                    this.changeDevice(this.$refs.cardPoster, true);
                    this.changeDevice(this.$refs.cardHr, true);
                    this.changeDevice(this.$refs.subtitle, true);
                    this.changeDevice(this.$refs.description, true);
                });
            }
            else {
                this.displayTitle = this.concert.title;
                this.displaySubtitle = this.concert.subtitle;
                this.displayDiscription = this.concert.description;
                this.$nextTick(() => {
                    // cardContent
                    this.changeDevice(this.$refs.cardContent, false);
                    this.changeDevice(this.$refs.card, false);
                    this.changeDevice(this.$refs.title, false);
                    this.changeDevice(this.$refs.posterImg, false);
                    this.changeDevice(this.$refs.cardDetail, false);
                    this.changeDevice(this.$refs.cardPoster, false);
                    this.changeDevice(this.$refs.cardHr, false);
                    this.changeDevice(this.$refs.subtitle, false);
                    this.changeDevice(this.$refs.description, false);
                });
            }
        }
    },
    async mounted() {
        // Fetch the image file as a Blob
        let path;
        this.responsiveDisplay();
        if (this.isUpcoming) {
            path = `/events/upcoming-posters/${this.concert.posterLink}`;
        }
        else {
            path = `/events/past-posters/${this.concert.posterLink}`;
        }
        const response = await fetch(path);
        const blob = await response.blob();
        this.posterBlobUrl = URL.createObjectURL(blob);
        this.$watch(() => this.isHovered, () => {
            if (this.isHovered && !this.isMobile) {
                this.onHover();
            }
            else if (!this.isMobile) {
                this.offHover();
            }
        });
        // watch window resize
        window.addEventListener('resize', this.responsiveDisplay);
    },
    beforeUnmount() {
        // Revoke the Blob URL to free up memory
        URL.revokeObjectURL(this.posterBlobUrl);
    }
}
</script>

<style>
    .card.computer {
        width: 50vw;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .card.mobile {
        width: 50vw;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .hover-scale {
        transition: transform 0.3s ease;
    }

    .hover-scale:hover {
        transform: scale(1.2); /* Adjust the scale factor as needed */
        cursor: pointer;
    }

    .card-content {
        display: flex;
    }

    .card-content.computer {
        flex-direction: row;
        margin: min(2vh, 2vw); /* Responsive margin */
        align-items: top;
    }

    .card-content.mobile {
        flex-direction: column;
        margin-top: 1vw;
        margin-bottom: 1vw;
        width: 100%;
        align-items: center;
    }

    .card-content.reverse.computer {
        flex-direction: row-reverse;
        margin-top: min(2vh, 2vw); /* Responsive margin */
        align-items: top;
    }

    /* do not flip in mobile */
    .card-content.reverse.mobile {
        flex-direction: column;
        margin-top: 1vw;
        margin-bottom: 1vw;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1; /* Show image */
        }
    }

    @keyframes slideInFromRight {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1; /* Show image */
        }
    }

    .card-main-poster {
        animation: slideInFromLeft 1.5s forwards;
        animation-name: slideInFromLeft;
        animation-duration: 1.5s;
        opacity: 0; /* Initially hidden */
    }

    .card-main-poster.reverse {
        animation: slideInFromRight 1.5s forwards;
        animation-name: slideInFromRight;
        animation-duration: 1.5s;
        opacity: 0; /* Initially hidden */
    }

    .poster {
        flex: 1;
    }

    .poster.mobile {
        margin-left: auto;
        margin-right: auto;
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

    .event-card-detail {
        flex: 2;
        padding: 0 2vw; /* Responsive padding */
        animation: slideInFromRight 1.5s forwards;
        animation-name: slideInFromRight;
        animation-duration: 1.5s;
        opacity: 0; /* Initially hidden */
    }

    .event-card-detail.reverse {
        flex: 2;
        padding: 0 2vw; /* Responsive padding */
        animation: slideInFromLeft 1.5s forwards;
        animation-name: slideInFromLeft;
        animation-duration: 1.5s;
        opacity: 0; /* Initially hidden */
    }

    .event-card-detail.computer {
        max-width: 30vw;
    }

    .event-card-detail.mobile {
        max-width: 70vw;
    }
    
    .event-card-title {
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
        justify-content: left;
    }

    .event-card-title.computer {
        font-size: min(5vh, 7vw);
    }

    .event-card-title.mobile {
        font-size: 7.5vh;
    }

    .event-card-title-hover {
        color: #b20000;
    }

    .event-card-title-hover.reverse {
        color: #ff6638;
    }
    
    .event-card-subtitle {
        font-size: min(2.5vh, 5vw);
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        margin-bottom: 1vh;
    }

    .event-card-subtitle.computer{
        justify-content: left;
    }

    .event-card-subtitle.mobile {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    .event-card-description {
        font-size: 2vh;
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
        font-family: 'Times New Roman', Times, serif;
        word-wrap: break-word;
        width: auto;
        line-height: 3vh;
    }

    .event-card-description.computer {
        justify-content: left;
    }

    .event-card-description.mobile {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        height: auto;
    }

    img.computer {
        max-width: 17vw;
    }

    img.mobile {
        max-width: 50vw;
    }

    .line-between {
        align-items: center;
        border: 1;
        height: 1px;
        background-color: white;
        margin: auto;
    }

    .line-between.computer {
        width: 100%;
    }

    .line-between.mobile {
        width: 100%;
    }

    .separate-line {
        margin-top: 7.5vh;
        margin-bottom: 7.5vh;
        margin-left: auto;
        margin-right: auto;
    }
</style>