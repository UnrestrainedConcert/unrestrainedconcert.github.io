<template>
    <div>
        <!--Link to dist/secure.html (since it is on server no need for dist) via IFrame-->
        <iframe src="secure.html" width="100%" height="100%"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'SecureView'
    };
</script>