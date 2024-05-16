import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue"
import ContactPage from "./pages/ContactPage.vue"
import AboutPage from "./pages/AboutPage.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/about-us",
            name: "About",
            component: AboutPage,
            
        },
        {
            path: "/shop",
            name: "Shop",
            component: ContactPage,
        },
        {
            path: "/contact",
            name: "Contact",
            component: ContactPage,
        },
        
    ]
})