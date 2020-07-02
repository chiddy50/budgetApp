import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from "@/Home";
import Test1 from "@/components/Test1";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/modal",
        name: "Modal",
        component: () => import("../components/Modal.vue")
    },
    {
        path: "/test/:id",
        name: "Test1",
        component: Test1
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
