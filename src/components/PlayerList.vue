<template>
    <div>
        <span style="float: right">
            <input id="searchWord" type="text" style="border: 1px solid black"></span>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">No.</th>
                    <th class="text-left">선수이름</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of list" :key="item.referenceSeq">
                    <td>{{ item.referenceSeq}}</td>
                    <td>{{ item.playerName}}</td>
<!--                    <td><a @click="retrieveOne(item.movieSeq)" href="#">{{ item.title }}</a></td>-->
                </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div class="text-center" >

            <!--<v-pagination v-model="page" :length="5" :total-visible="5"></v-pagination>-->
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex"
    export default {
        name: "PlayerList",
        computed: {
            ...mapState({
                list: state => state.crawling.player
                // pages: state => state.search.pages,
                // pager: state => state.search.pager
            })
        }
    }
</script>

<style scoped>

</style>