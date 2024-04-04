<template>
    <div>
        <iframe :src="iframeSrc" style="position: absolute; height: 100%; width: 100%; border:none;" ref="iframeRef"></iframe>
        <PlaceHolderView ref="placeHolder" :initialHeight="'0px'"/>
    </div>
</template>

<script>
    // since the iframe has weird height behavior, we add a PlaceHolderView to adjust the height, first import
    import PlaceHolderView from './widgets/PlaceHolderView.vue';
    export default {
        name: 'SecureView',
        components: {
            PlaceHolderView
        },
        data() {
            return {
                iframeSrc: '',
                frameHeight: 0,
            };
        },
        async mounted() {
            // to prevent the unexpected web history navigation when refreshing the page
            this.iframeSrc = '/secure.html';
            console.log("You won't find the password by just inspecting here, nor will you find it by checking the git repo :)");
            while (this.$refs === undefined) {
            await new Promise(resolve => setTimeout(resolve, 100));
            }
            this.adjustPlaceHolder();
            this.$watch(() => this.$refs.iframeRef.contentWindow.document.body.scrollHeight, 
                () => {
                    this.adjustPlaceHolder();
                }
            );
        },
        methods: {
            adjustPlaceHolder() {
                this.frameHeight = this.$refs.iframeRef.contentWindow.document.body.scrollHeight;
                this.$refs.placeHolder.changeHeight(this.frameHeight);
            }
        }
    };
</script>

<style>
.secure-view {
    position: absolute;
    height: 100%;
    width: 100%;
    border: none;
    z-index: 0;
}
</style>