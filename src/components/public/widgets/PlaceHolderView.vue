<template>
    <div ref="ph" :style="{ width: '100vw', clear: 'both' }"></div>
</template>

<script>
export default {
    name: 'PlaceHolderView',
    props: {
        initialHeight: {
            type: String,
            default: '0px',
        },
    },
    async mounted() {
        while (this.$refs === undefined) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        this.changeHeight(this.initialHeight);
    },
    methods: {
        changeHeight(newHeight) {
            this.$refs.ph.style.height = newHeight.toString() + 'px';
        },
    },
};
</script>
