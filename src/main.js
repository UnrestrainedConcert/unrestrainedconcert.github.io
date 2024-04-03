import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// public
import HomeView from        './components/public/HomeView.vue';
import WhatsonView  from    './components/public/WhatsonView.vue';
import AboutView    from    './components/public/AboutView.vue';
import EventsView   from    './components/public/EventsView.vue';
import SupportView  from    './components/public/SupportView.vue';
import FAQView      from    './components/public/FAQView.vue';
import ContactView  from    './components/public/ContactView.vue';
import LibraryView  from    './components/public/LibraryView.vue';
import SecureView   from    './components/public/SecureView.vue';


const public_routes = [
    { path: '/',            component: HomeView}, 
    { path: '/whatson',     component: WhatsonView },
    { path: '/about',       component: AboutView },
    { path: '/events',      component: EventsView },
    { path: '/support',     component: SupportView },
    { path: '/faq',         component: FAQView },
    { path: '/contact',     component: ContactView },
    { path: '/library',     component: LibraryView },
    { path: '/secret',      component: SecureView}
];

const public_router = createRouter({
    history: createWebHashHistory (),
    routes: public_routes, 
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

let app = createApp(App);
app.config.globalProperties.window = window;
app.use(public_router).mount('#app');