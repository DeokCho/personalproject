import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Login from "../components/Login";
import PlayerList from "../components/PlayerList";
import Join from "../components/Join";

Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", component: Home },
        { path: "/login", component: Login },
        { path: "/playerList", component: PlayerList },
        { path: "/join", component: Join }
    ]
});

