<template>
    <footer class="footer">
        <div class="container">
            <div class="website-copyright">
                &copy; 2021-2024 Unrestrained Festival Orchestra. All rights reserved.
            </div>
            <div class="poster-copyright">
                Unrestrained Poster for 2022 & 2023 &copy; Crystal Cheng. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterView',
};
</script>

<style scoped>
.footer {
    background-color: black;
    color: white;
    padding: 1.3vh;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    height: 5vh;
}

.container {
    max-width: 50vw;
    margin-top: 0.3vh;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.copyright {
    font-size: 1.2vh;
}

.website-copyright {
    margin-bottom: 0.3vh;
}
</style>