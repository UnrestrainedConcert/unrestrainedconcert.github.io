<template>
    <div>
        <iframe :src="iframeSrc" style="position: absolute; height: 100%; width: 100%; border:none;" ref="iframeRef"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'SecureView',
        data() {
            return {
                iframeSrc: '',
            };
        },
        mounted() {
            // to prevent the unexpected web history navigation when refreshing the page
            this.iframeSrc = 'secure.html';
            console.log("You won't find the password by just inspecting here, nor will you find it by checking the git repo :)");
        },
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