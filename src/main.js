import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './components/AboutView.vue';
import EventsView from './components/EventsView.vue';
import ContactView from './components/ContactView.vue';

const routes = [
    { path: '/about', component: AboutView },
    { path: '/events', component: EventsView },
    { path: '/contact', component: ContactView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');