<template>
  <v-app>
    <v-app-bar
            app
            color="white"
            dark
    >
      <div class="d-flex align-center">
        <img @click="for_main"
               alt="MLBLOGO"
               class="mlblogo"
               contain
               src="@/assets/MLBLOGO.png"
               transition="scale-transition"
               width="70"/>
        />

      </div>
      <input @click="login" id="main_login" type="button" value="로그인" />
      <a @click="search_player">역대 선수 정보</a>
    </v-app-bar>
    <top>
      <br>
      <br>
    </top>
    <v-content>
        <router-view/>
    </v-content>

    <div id="bottom">
      <div id="bottom_left">
        <a>Information</a>
      </div>
      <div id="bottom_right">
        <a>개인정보처리방침</a>
        <a>약관</a>
        <a>설정</a>
      </div>
    </div>

  </v-app>
</template>

<script>

  export default {
    data(){
      return {
        findAll: "YES"
      };
    },
    methods:{
      login(){
        this.$router.push("/login");
      },
      for_main() {
        this.$router.push("/")
      },
      search_player(){
        this.$store.dispatch("crawling/totalReference")
      }
    }

  };
</script>

<style scoped>
  .mlblogo{
    cursor : pointer;
    margin: 10px 7px;
    vertical-align: middle;
  }

  #main_login{
    background-color: dodgerblue;
    color: white;
    width: 70px;
    height: 30px;
    border: none;
    margin: 10px 12px 10px 7px;
    font-weight: bold;
    font-size: 10pt;
    border-radius: 2px;
    right : 300px;
    float : right;
  }
  body {
    margin: 0px;
    min-width: 1300px;
    min-height: 550px;
  }
  a {
    text-decoration: none;
    font-size: 10.5pt;
    margin: 0px 10px;
    color: grey;
  }
  a:hover {
    text-decoration: underline;
  }
  #bottom {
    border: 1px solid #e4e4e4;
    border-right: none;
    border-left: none;
    position: absolute;
    bottom: 0px;
    background-color: #f2f2f2;
    height: 50px;
    width: 100%;
    min-width: 1050px;
  }
  #bottom_left {
    float: left;
    padding: 15px;
  }
  #bottom_right {
    float: right;
    padding: 15px;
  }
</style>