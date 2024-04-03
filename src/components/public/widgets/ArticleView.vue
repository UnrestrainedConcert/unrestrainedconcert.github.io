<template>
    <div class="article-page">
        <div class="article-page-title">{{ article_title }}</div>
        <div class="article-page-content">
            <div v-if="true" style="white-space: pre-line" class="article-content"> <!-- Test -->
                {{ article_contents }}
            </div>
            <div v-else class="article-subpage">
                <div v-for="subarticle in article_contents" :key="subarticle.id">
                    <ArticleView :article_title="subarticle.article_title" :article_contents="subarticle.article_contents" :layer="article_layer + 1"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleView',
    props: {
        article_title: String,
        article_contents: [String, Array],
        article_layer: Number,
    },
    data() {
        return {
            leaf_article: true,
        };
    },
    mounted() {
        // article_contents is null or is string
        if ((this.article_contents !== null) && (typeof this.article_contents !== 'string')) {
            this.leaf_article = false;
        }
    }
};
</script>

<style scoped>
.article-page {
    width: 57vw;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.article-page-title {
    width: 57vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    font-family: 'Times New Roman', Times, serif;
    height: 3vh; /* Set height as needed */
    font-size: 4vh;
    margin-top: 3vh;
    margin-bottom: 1.5vh;
    margin-left: auto;
    margin-right: auto;
}

.article-page-content {
    width: 57vw;
    align-items: left;
    font-family: 'Times New Roman', Times, serif;
    height: auto; /* Set height as needed */
    font-size: 2vh;
    margin-top: 1.5vh;
    margin-bottom: 3vh;
    margin-left: auto;
    margin-right: auto;
}

.article-content {
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}
</style>