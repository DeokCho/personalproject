<template>
  <v-app>
    <div >
      <img
              id="mainIMG"
              src="@/assets/majormain.jpg"
              title="baseball"
      />
    </div><br><br>
    <div>
      <input
              id="search"
              v-model="searchWord"
              type="text"
              placeholder="Who is best of Major League?"
              style=" background-repeat: no-repeat; background-position: 88% 50%, 98% 50%;"
              title="검색"
      />
    </div>
    <div id="box">
      <input
              @click="search"
              id="player_search"
              type="button"
              value="검색"
      />
    </div>
    <br>
    <br>
  </v-app>
</template>
<script>

  export default {
    data() {
      return {
        searchWord: ""
      };
    },
    methods: {
      search() {
        this.$store.dispatch("search/search", this.searchWord);
      },
      login(){
        this.$router.push("/login");
      },
      for_main() {
        this.$router.push("/login")
      },
      search_player(){
        this.$router.push("/playerList")
      }
    }
  };
</script>
<style scoped>
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
  img {
    margin: 10px 7px;
    width: 20px;
    vertical-align: middle;
  }
  #search {
    display: block;
    margin: 0 auto;
    width: 550px;
    height: 35px;
    font-size: 10pt;
    box-shadow: 3px 3px 5px #c3c3c3;
    border: 1px solid #eaeaea;
    text-align : center;
  }
  #mainIMG{
    width : 80%;
    height : 50%;
    display: block;
    margin: 0px auto;
  }
  #box {
    text-align: center;
  }
  #player_search {
    width: 135px;
    height: 40px;
    margin: 30px 3px;
    border: none;
    background-color: dodgerblue;
    font-weight: bold;
    color: white;
  }
  #Feeling_Lucky {
    width: 180px;
    height: 40px;
    margin: 30px 3px;
    border: none;
    background-color: #f4f4f4;
    font-weight: bold;
    color: grey;
  }
  #player_search:hover,
  #Feeling_Lucky:hover {
    border: 1px solid #c6c6c6;
    color: black;
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