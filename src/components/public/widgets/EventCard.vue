<template>
    <div class="card">
        <div class="card-content" :class="{ 'reverse': concertId % 2 === 1 }">
            <div class="poster">
                <img :src="posterBlobUrl" alt="Concert Poster" />
            </div>
            <div class="event-card-detail">
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