import axios from "axios";
import router from "@/router";

const state={
    context:"http://localhost:5000",
    list : []

}

const actions={
    async join({commit}, joinInformation){
        commit("JOIN", userInform)
    },
    async login({commit}, identity, passwd){
        axios
            .post(state.context+'/login')
            .then(({data})=>{
                commit("LOGIN", data)
            })
            .catch(()=>{})

    }
}

const mutations ={


}

const getters ={

}

export default {
    name:"member",
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}