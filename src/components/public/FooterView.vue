<template>
    <footer class="footer">
        <div class="container">
            <p class="copyright">
                &copy; 2021-2024 UnRestrained Festival Orchestra. All rights reserved.
            </p>
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
    max-width: 1200px;
    margin: 0 auto;
}

.copyright {
    font-size: 1.5vh;
}
</style>