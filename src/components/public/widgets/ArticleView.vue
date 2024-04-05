<template>
    <div class="article-page">
        <div class="article-page-title"
            :class="{ 
                'layer-0': article_layer === 0, 
                'layer-1': article_layer === 1, 
                'layer-2': article_layer === 2
            }">
            {{ article_title }}
        </div>
        <div class="article-page-content"
            :class="{
                'layer-0': article_layer === 0,
                'layer-1': article_layer === 1,
                'layer-2': article_layer === 2
            }">
            <div v-if="leaf_article" style="white-space: pre-line" class="article-content"> <!-- Test -->
                {{ article_contents }}
            </div>
            <div v-else-if="(article_layer + 1) <= layer_hidden" class="article-subpage">
                <div v-for="subarticle in article_contents" :key="subarticle.id">
                    <ArticleView :article_title="subarticle.article_title" :article_contents="subarticle.article_contents" :article_layer="article_layer + 1" :layer_hidden="layer_hidden"/>
                </div>
            </div>
            <div v-else>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleView',
    props: {
        article_title: String,
        // don't set this in the array (if applicable): article_contents
        article_layer: {
            type: Number,
            default: 0
        },
        // will be expanded to sub-articles if it is an array
        article_contents: [String, Array],
        // only works for sub-layers
        layer_hidden: {
            type: Number,
            default: 3  // hide nothing
        }
    },
    data() {
        return {
            leaf_article: true,
        };
    },
    mounted() {
        if (this.article_layer > 2) {
            console.log("Article layer is too deep. Maximum layer is 2.")
        }
        // article_contents is null or is string => leaf article
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
    height: auto; /* Set height as needed */
    margin-left: auto;
    margin-right: auto;
}

.article-page-title.layer-0 {
    font-size: 4.5vh;
    margin-top: 4vh;
    margin-bottom: 1.25vh;
}

.article-page-title.layer-1 {
    font-size: 2.75vh;
    margin-top: 2.25vh;
    margin-bottom: 0.75vh;
}

.article-page-title.layer-2 {
    font-size: 2.1vh;
    margin-top: 0.6vh;
    margin-bottom: 0.1vh;
}

.article-page-content {
    width: 57vw;
    align-items: left;
    font-family: 'Times New Roman', Times, serif;
    height: auto; /* Set height as needed */
    margin-left: auto;
    margin-right: auto;
    line-height: 3vh;
}

.article-page-content.layer-0 {
    font-size: 2.5vh;
    margin-top: 1.6vh;
    margin-bottom: 3.1vh;
}

.article-page-content.layer-1 {
    font-size: 2vh;
    margin-top: 0.55vh;
    margin-bottom: 1.05vh;
}

.article-page-content.layer-2 {
    font-size: 1.3vh;
    margin-top: 0.105vh;
    margin-bottom: 0.205vh;
}

.article-content {
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}
</style>