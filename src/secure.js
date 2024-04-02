import { createApp } from 'vue';
import SecureApp from './SecureApp.vue';
import { createRouter, createWebHistory } from 'vue-router';
// secure
import ScoreCard    from    './components/secure/ScoreCard.vue';

const secure_routes = [
    { path: '/scorecard',   component: ScoreCard }
];

const secure_router = createRouter({
    history: createWebHistory(),
    routes: secure_routes
});

let app = createApp(SecureApp);
app.config.globalProperties.window = window;
app.use(secure_router).mount('#secure-app');