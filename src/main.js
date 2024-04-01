import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ConcertsView from './components/ConcertsView.vue';
import AboutView from './components/AboutView.vue';
import EventsView from './components/EventsView.vue';
import SupportView from './components/SupportView.vue';
import FAQView from './components/FAQView.vue';
import ContactView from './components/ContactView.vue';
import LibraryView from './components/LibraryView.vue';
import SecureView from './components/SecureView.vue';

const routes = [
    { path: '/concerts', component: ConcertsView },
    { path: '/about', component: AboutView },
    { path: '/events', component: EventsView },
    { path: '/support', component: SupportView },
    { path: '/faq', component: FAQView },
    { path: '/contact', component: ContactView },
    { path: '/library', component: LibraryView },
    { path: '/secure', component: SecureView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');