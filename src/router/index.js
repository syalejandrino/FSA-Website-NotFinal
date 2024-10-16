import { createRouter, createWebHistory } from 'vue-router';
// Importing view components for the routes
import HomeView from '../views/Home.vue';
import EventsView from '../views/Events.vue';
import ExecBoardView from '../views/ExecBoard.vue';
import BlogView from '../views/Blog.vue';
import ContactUsView from '../views/ContactUs.vue';

// Creating a router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Route for the home page
      name: 'Home',
      component: HomeView
    },
    {
      path: '/events', // Route for the events page
      name: 'Events',
      component: EventsView
    },
    {
      path: '/exec-board', // Route for the executive board page
      name: 'ExecBoard',
      component: ExecBoardView
    },
    {
      path: '/blog', // Route for the blog page
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/contact-us', // Route for the contact us page
      name: 'ContactUs',
      component: ContactUsView
    }
  ]
});

// Exporting the router instance for use in the main application
export default router;