import axios from "axios";
import router from "@/router"

const state={
    context:"http://localhost:5000",
    list : []

}

const actions={
    async join({commit},payload){
        const headers = {
            authorization: 'JWT fefege..',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(`${state.context}/member/join`,payload, headers)
            .then(({data})=>{
                commit("JOIN", data)
                alert('회원가입 완료. '+payload.name+"님 환영합니다.")
                router.push("/")

            })
            .catch(()=>{})
    },
    async login({commit}, payload){
        const headers = {
            authorization: 'JWT fefege..',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(`${state.context}/member/login`,payload, headers)
            .then(({data})=>{
                commit("LOGIN", data)
            })
            .catch(()=>{})

    }
}

const mutations ={
    // JOIN(state, data){
        // data.list.forEach(item => state.member.push({}))
    // }

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