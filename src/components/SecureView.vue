<template>
    <div>
        <input type="password" v-model="password" placeholder="Enter password" />
        <button @click="checkPassword">Submit</button>
        <div v-if="showContent">
            <!-- Your secure content goes here -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            showContent: false
        };
    },
    methods: {
        checkPassword() {
            // Replace 'password123' with your desired password
            if (this.password === 'password123') {
                this.showContent = true;
            } else {
                // Redirect back to App.vue or any other component
                this.$router.push('/app');
            }
        }
    }
};
</script>