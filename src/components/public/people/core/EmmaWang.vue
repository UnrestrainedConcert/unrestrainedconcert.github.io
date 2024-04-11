<template>
    <div class="EmmaWang">
        <div class="background">
            <img :src="imageSrc[srcIndex]" alt="Emma Wang Background"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmmaWang',
    data() {
        return {
            imageSrc: [
                // require("@/assets/about/people/Brian/Brian_main.png"),
                // require("@/assets/about/people/Brian/Brian_conduct.png"),
            ],
            srcIndex: 0,
            // scroll: 0,
        };
    },
};
</script>

<style scoped>
.background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>