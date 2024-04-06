<template>
    <!-- faq top view -->
    <div class="orchestra-top-section">
        <div class="orchestra-name">
            <div class="faq-title">{{faqTitle}}</div>
        </div>
        <div class="orchestra-photo">
            <img :src="faqImgSrc" alt="Unrestrained Orchestra">
        </div>
  </div>
    <!-- faqs from json -->
    <div class="faq-view">
        <!-- id is not in json -->
        <div v-for="(faq, index) in faqs.faqs"
            :key="index"
            class="faq-section"
            :class="{'lastEvent':index===faqs.faqs.length-1}"
            >
            <div class="faq-question" @click="toggleAnswer(index)">
                {{ faq.question }}
            </div>
            <div v-if="index == selectedId" class="faq-answer">
                {{ faq.answer }}
            </div>
        </div>
    </div>
</template>

<script>
import faqs from '@/assets/faqs.json';
export default {
    name: 'FAQView',
    data() {
        return {
            faqs: faqs,
            selectedId: null,
            faqImgSrc: require('@/assets/poster/poster_faq.png'),
            faqTitle: "Frequently Asked Questions"
        };
    },
    methods: {
        toggleAnswer(id) {
            this.selectedId = this.selectedId === id ? null : id;
            console.log(this.selectedId);
        }
    }
};
</script>

<style scoped>
.orchestra-top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vw;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 6vw;
  margin: 0;
  background-color: #f5f5f5;
}

.orchestra-photo {
  width: 45vw;
  height: auto;
  background-color: white;
  border-radius: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.orchestra-photo img {
  width: 100%;
  height: auto;
}
.faq-title {
    font-size: min(7vh, 11vw);
    text-align: left;
    margin-top: 3vh;
    font-family: "Times New Roman", Times, serif;
    margin-left: 2.5vw;
}
.faq-view {
    font-family: "Times New Roman", Times, serif;
    width: 90vw;
    margin-left: 2vw;
    padding-left: 1vw;
    margin-top: 1vh;
    margin-bottom: 5vh;
}

.faq-section {
    border-bottom: 1px solid #ccc;
    padding-top: 3vh;
    padding-bottom: 3vh;
}

.faq-section.lastEvent {
    border-bottom: none;
}

.faq-question {
    font-size: min(3.5vh, 10vw);
    cursor: pointer;
}

.faq-answer {
    font-size: min(2.5vh, 8vw);
    margin-top: 2vh;
}

.faq-answer.show {
    display: block;
}
</style>
