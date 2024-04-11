<template>
    <div>
        <component :is="getPersonComponent" :person="person" @headerState="handleHeaderState" :scrollValue="scrollValue"></component>
    </div>
</template>

<script>
import ComposerM from './core/ComposerM.vue';
import BrianGuo from './core/BrianGuo.vue';
import EmmaWang from './core/EmmaWang.vue';
import DefaultView from './PeoplePage.vue';

export default {
    name: 'PeoplePage',
    props: {
        person: {
            type: String,
            required: true,
        },
        scrollValue: Number,
    },
    mounted() {
        console.log('PeoplePage mounted with person ' + this.person);
    },
    methods: {
        handleHeaderState(state) {
            this.$emit('headerState', state);
            console.log('PeoplePage received and emitted headerState ' + state);
        }
    },
    computed: {
        getPersonComponent() {
            switch (this.person) {
                case 'ComposerM':
                    return ComposerM;
                case 'BrianGuo':
                    return BrianGuo;
                case 'EmmaWang':
                    return EmmaWang;
                default:
                    return DefaultView;
            }
        },
    }
};
</script>