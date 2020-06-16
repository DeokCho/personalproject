<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="KBOLOGO"
          class="kbologo"
          contain
          src="@/assets/kbologo.png"
          transition="scale-transition"
          width="70"
        />

      </div>

      <v-spacer></v-spacer>

      <!--<v-btn
        href="#"
        target="_blank"
        text
      >
        <span class="login">로그인</span>
      </v-btn>-->
      <input id="login" type="button" value="로그인" />
      <a></a>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  #login{
    background-color: #4485f3;
    color: #ffffff;
    width: 70px;
    height: 30px;
    border: none;
    vertical-align: middle;
    margin: 10px 12px 10px 7px;
    font-weight: bold;
    font-size: 10pt;
    border-radius: 2px;
  }
</style>
