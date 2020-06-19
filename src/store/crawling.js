import axios from "axios";
import router from "@/router";

const state ={
    context: "http://localhost:5000/",
    player: [],
    count:0
};

const actions = {
    async totalReference({commit}){
        axios
            .get(state.context+"references/totalReference")
            .then(({data})=>{
                commit("TOTALREFERENCE",data)
                alert("성공")
                router.push("/playerList")})
            .catch(()=>{
                alert("실패")
            })

    }
}

const mutations ={
    TOTALREFERENCE(state, data){
        data.list.forEach(item => state.player.push({
            referenceSeq: item.referenceSeq,
            playerName: item.playerName,
            gamesPlayed: item.gamesPlayed,
            atBat: item.atBat,
            runs: item.runs,
            hits: item.hits,
            doubles: item.doubles,
            triples: item.triples,
            homeRuns: item.homeRuns,
            runsBattedIn: item.runsBattedIn,
            walks: item.walks,
            strikeouts: item.strikeouts,
            stolenBases: item.stolenBases,
            caughtStealing: item.caughtStealing,
            battingAverage: item.battingAverage,
            onBasePercentage: item.onBasePercentage,
            sluggingPercentage: item.sluggingPercentage
        }))
    }
}

const getters ={
    player: state => state.player
}


export default {
    name:"crawling",
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}