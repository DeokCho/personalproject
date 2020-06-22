import Vue from "vue"
import Vuex from "vuex"
import crawling from "./crawling"
import member from "./member"
Vue.use(Vuex)
export const store = new Vuex.Store({
    modules: {
        crawling, member,
    }
})

