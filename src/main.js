import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
// public
import ConcertsView from    './components/public/ConcertsView.vue';
import AboutView    from    './components/public/AboutView.vue';
import EventsView   from    './components/public/EventsView.vue';
import SupportView  from    './components/public/SupportView.vue';
import FAQView      from    './components/public/FAQView.vue';
import ContactView  from    './components/public/ContactView.vue';
import LibraryView  from    './components/public/LibraryView.vue';
import SecureView   from    './components/public/SecureView.vue';


const public_routes = [
    { path: '/concerts',    component: ConcertsView },
    { path: '/about',       component: AboutView },
    { path: '/events',      component: EventsView },
    { path: '/support',     component: SupportView },
    { path: '/faq',         component: FAQView },
    { path: '/contact',     component: ContactView },
    { path: '/library',     component: LibraryView },
    { path: '/secure',      component: SecureView }
];

const public_router = createRouter({
    history: createWebHistory(),
    routes: public_routes
});

createApp(App).use(public_router).mount('#app');