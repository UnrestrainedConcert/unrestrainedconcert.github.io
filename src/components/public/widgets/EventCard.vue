<template>
    <div class="card">
        <div class="card-content" :class="{ 'reverse': concertId % 2 === 1 }">
            <div class="poster">
                <img :src="posterBlobUrl" alt="Concert Poster" class="card-main-poster" :class="{ 'reverse': concertId % 2 === 1 }"/>
            </div>
            <div class="event-card-detail" :class="{ 'reverse': concertId % 2 === 1}">
                <div class="event-card-title great-vibes-regular">{{ concert.title }}</div>
                <div class="event-card-subtitle">{{ concert.subtitle }}</div>
                <div class="event-card-description noto-serif" style="white-space: pre-line">{{ concert.description }}</div>
            </div>
        </div>
        <div class="separate-line" v-if="!lastEvent">
            <hr class="line-between">
        </div>
    </div>
    </template>

<script>
export default {
    name: 'EventCard',
    props: {
        isUpcoming: Boolean,
        concert: Object,
        concertId: Number, 
        lastEvent: Boolean
    },
    data() {
        return {
            posterBlobUrl: ''
        };
    },
    async mounted() {
        // Fetch the image file as a Blob
        console.log(this.lastEvent);
        let path;
        if (this.isUpcoming) {
            path = `/events/upcoming-posters/${this.concert.posterLink}`;
        }
        else {
            path = `/events/past-posters/${this.concert.posterLink}`;
        }
        console.log(path);
        const response = await fetch(path);
        const blob = await response.blob();
        this.posterBlobUrl = URL.createObjectURL(blob);
    },
    beforeUnmount() {
        // Revoke the Blob URL to free up memory
        URL.revokeObjectURL(this.posterBlobUrl);
    }
}
</script>

<style>
    .card {
        width: 50vw;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .card-content {
        display: flex;
        flex-direction: row;
        align-items: top;
        margin: 2vh; /* Responsive margin */
    }

    .card-content.reverse {
        flex-direction: row-reverse;
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
        max-width: 30vw;
        animation: slideInFromRight 1.5s forwards;
        animation-name: slideInFromRight;
        animation-duration: 1.5s;
        opacity: 0; /* Initially hidden */
    }

    .event-card-detail.reverse {
        flex: 2;
        padding: 0 2vw; /* Responsive padding */
        max-width: 30vw;
        animation: slideInFromLeft 1.5s forwards;
        animation-name: slideInFromLeft;
        animation-duration: 1.5s;
        opacity: 0; /* Initially hidden */
    }
    
    .event-card-title {
        font-size: 5vh;
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
        justify-content: left;
    }
    
    .event-card-subtitle {
        font-size: 2.5vh;
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
        justify-content: left;
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        margin-bottom: 1vh;
    }

    .event-card-description {
        font-size: 2vh;
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto a new line */
        justify-content: left;
        font-family: 'Times New Roman', Times, serif;
        word-wrap: break-word;
        width: auto;
    }

    img {
        max-width: 16vw;
        height: auto;
    }

    .line-between {
        align-items: center;
        border: 1;
        height: 1px;
        background-color: white;
        width: 100%;
        margin: auto;
    }

    .separate-line {
        margin-top: 1.5vh;
        margin-bottom: 1.5vh;
    }
</style>