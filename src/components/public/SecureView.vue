<template>
    <div>
        <!--Link to dist/secure.html (since it is on server no need for dist) via IFrame-->
        <iframe src="secure.html" style="position: absolute; height: 100%; width: 100%; border:none;"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'SecureView'
    };
    console.log("You won't find the password by just inspecting here, nor will you find it by checking the git repo :)");
</script>