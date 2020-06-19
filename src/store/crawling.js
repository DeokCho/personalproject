import axios from "axios";
import router from "@/router";

const state ={
    context: "http://localhost:5000/",
    player: [],
    count:0
};

const actions = {
    async totalReference({commit}){
        alert('Actions Start')
        axios
            .get(state.context+"records/alltime")
            .then((data)=>{
                commit("TOTALREFERENCE",data)
                router.push("/playerList")})
            .catch(()=>{})

        alert("Actions End")

    }
}

const mutations ={
    TOTALREFERENCE(state, data){
        state.player = data
    }
}

const getters ={

}


export default {
    name:"crawling",
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}