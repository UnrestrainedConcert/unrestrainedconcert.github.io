<template>
    <div class="event-view">
        <div class="event-page-title"> {{ title }} </div>
        <ConcertView ref="concertview" class="event-concert" v-if="ready"/>
        <!-- 404 -->
        <div v-else-if="try_upcoming" ref="joke" class="event-page-joke protest-guerrilla-regular" style="white-space: pre-line">
            {{ joke_list.join("\n") }}
        </div>
        <div v-else class="event-page-404 protest-guerrilla-regular urfo-red">
            404 Not Found
        </div>
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
            ready: false,
            try_upcoming: false,
            joke_list: [],
            title: "Unrestrained History Concerts",
            jokeTimer: null,
        };
    } ,
    props: {
        concertTitle: String,
    },
    async mounted() {
        try{
            if (this.concertTitle === "unrestrained2024" || this.concertTitle === "Unrestrained2024") {
                this.try_upcoming = true;
                this.$nextTick(() => {
                    this.generateJoke();
                });
                return;
            }
            this.concertinfo = await require('@/assets/past/' + this.concertTitle + '.json');
            if (this.concertinfo !== null && this.concertinfo !== undefined) {
                this.ready = true;
                this.$nextTick(async () => {
                    await this.$refs.concertview.setConcertInfo(this.concertinfo);
                });
            }
        }
        catch(e) {
            console.log("404");
        }
    },
    methods: {
        generateJoke() {
            const jokes = [
                "Hey! You found the secret:\n —— UNRESTRAINED is NOT gonna happen! ——\n(Just kidding, it's coming soon!)",
                "You're looking for UNRESTRAINED, right?\nWell, it's not here yet!",
                "Why so anxious?\nLet me tell you where the real site is:\nJust wait and see!",
                "If you are a musician,\nGO PRACTICE NOW!",
                "Fact: Unrestrained 2024 will be the\nBEST\nCONCERT\nEVER!",
                "Unrestrained 2024 is coming soon!\nBut not now!",
                "Well, well, well...\nYou're looking for Unrestrained 2024, right?",
                "Why not take a break and come back later?",
                "DANGER!!!!!\nYou must have fallen into a time machine!\nWAKE UP!",
                "This time we are\n(NOT UN!) RESTRAIEND!\n(well, we won't)",
                "Shhh...\nThis time, we will bring an elephant to the stage!\nKidding, our music director hates saint-saens!",
                "Why did UNRESTRAINED 2024 hire a conductor with a fear of heights?\nThey needed someone to keep them grounded!",
                "Why did the UNRESTRAINED 2024 musician break up with his metronome?\nHe couldn't stand the constant ticking!",
                "Why did UNRESTRAINED 2024's concert hall refuse to sell tickets?\nThey were afraid the audience would 'harmonize' too loudly!",
                "You think I will put the secure-page password here?\nYEY! The password is ...\nJkL4&$rT7#nBhY9*oPqW1!mKl3@zXcV5^dE\nrF6%gU8(iO2)jAsDfGhJkL4&$rT7#nBhY9*oPqW1!mKl3@zXcV5^dErF6%gU8(iO2)jAsDfGhJkL4&$rT7#nBhY9\n*oPqW1!mKl3@zXcV5^dErF6%gU8(iO2)jAsDfGhJkL4&$rT7#nBhY9*oPqW1!mKl3@zXcV5^dErF6%gU8(\niO2)jAsDfGh\nWhat are the rest??\nOh! I forgot! :(",
                "Do you know why the UNRESTRAINED 2024 musicians are so good at playing?\nThey never UNRESTRAIN themselves!",
                "Oh! You wanna join as a musician?\nContact hellobrian18@gmail.com*new-line*This time not a joke!\n(Oh By the way*new-line*UNRESTRAINED 2024 is coming soon!)\n",
            ];
            // make the hire non-joke more frequent
            if (Math.random() < 0.2) {
                this.jokesplit = jokes[jokes.length - 1].split("\n");
                this.$refs.joke.style.color = `#b20000`;
                this.title = "You have reached our job market :)";
            }
            else {
                this.jokesplit = jokes[Math.random() * jokes.length | 0].split("\n");
                this.$refs.joke.style.color = `rgb(${Math.random() * 255 | 0}, ${Math.random() * 255 | 0}, ${Math.random() * 255 | 0})`;
                this.title = "You have reached a mysterious place ...";
            }
            // random color
            
            // first line
            let next = this.jokesplit.shift();
            next = next.replace("*new-line*", "\n");
            this.joke_list.push(next);
            // use timer to show the joke line by line, 3s per line, but don't clear previous
            this.jokeTimer = setInterval(() => {
                if (this.jokesplit.length > 0) {
                    next = this.jokesplit.shift();
                    next = next.replace("*new-line*", "\n");
                    this.joke_list.push(next);
                }
                else {
                    clearInterval(this.jokeTimer);
                }
            }, 3000);
        }
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

.event-page-404 {
    font-size: 8vh;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}


.event-page-joke {
    font-size: min(8vh, 6vw);
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
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

.protest-guerrilla-regular {
    font-family: "Protest Guerrilla", sans-serif;
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