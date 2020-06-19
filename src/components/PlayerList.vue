<template>
    <v-container>
        <!--        <a>DB에 있는 정보수 : {{ count }}</a>-->
        <v-card>
            <v-card-title>
                메이저리그 타자 순위
                <v-spacer/>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>

            <v-data-table
                    :headers="headers"
                    :items="player"
                    :search="search">
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import { mapState } from "vuex"
    export default {
        name: "PlayerList",
        data() {
            return {
            search : '',
                headers: [
                    {
                        text: '순위',
                        value: 'referenceSeq'
                    },
                    {
                        text: '이름',
                        value: 'playerName'
                    },
                    {
                        text: '경기',
                        value: 'gamesPlayed'
                    },
                    {
                        text: '타석',
                        value: 'atBat'
                    },
                    {
                        text: '득점',
                        value: 'runs'
                    },
                    {
                        text: '안타',
                        value: 'hits'
                    },
                    {
                        text: '2루타',
                        value: 'doubles'
                    },
                    {
                        text: '3루타',
                        value: 'triples'
                    },
                    {
                        text: '홈런',
                        value: 'homeRuns'
                    },
                    {
                        text: '타점',
                        value: 'runsBattedIn'
                    },
                    {
                        text: '볼넷',
                        value: 'walks'
                    },
                    {
                        text: '삼진',
                        value: 'strikeouts'
                    },
                    {
                        text: '도루',
                        value: 'caughtStealing'
                    },
                    {
                        text: '타율',
                        value: 'battingAverage'
                    },
                    {
                        text: '출루율',
                        value: 'onBasePercentage'
                    },
                    {
                        text: '장타율',
                        value: 'sluggingPercentage'
                    },
                ]
            }
        },
        computed: {
            ...mapState({
                player: state => state.crawling.player
                // pages: state => state.search.pages,
                // pager: state => state.search.pager
            })
        }
    }
</script>

<style scoped>

</style>