<template>
    <div class="people-view">
        <div class="person">
            <div class="person-image">
                <img :src="person.image || defaultImage" alt="Person Image">
            </div>
            <div class="person-details">
                <h3>{{ person.name }}</h3>
                <p>{{ person.description }}</p>
                <a v-if="person.website" :href="person.website" target="_blank">Visit Website</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PeopleView',
    props: {
        person: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            defaultImage: 'default-image.jpg'
        };
    },
};
</script>

<style scoped>
.people-view {
    /* Add your styles here */
}

.person {
    /* Add your styles here */
}

.person-image {
    /* Add your styles here */
}

.person-details {
    /* Add your styles here */
}
</style>