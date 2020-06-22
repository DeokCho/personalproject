<template>
    <form id="login">
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" v-model="identity" required="">
                    <label>ID</label>
                </div>
                <div class="user-box">
                    <input type="password" v-model="password" required="">
                    <label>Password</label>
                </div>
                <a @click="letslogin">
                    로그인
                </a>
                <a id="font-right" @click="login_cancel">취소</a>
                <br>
                <a id="join" @click="join">[ 회원가입 ]</a>
                <a id="privateFind" >[ 비밀번호 찾기 ]</a>
            </form>
        </div>


    </form>
</template>

<script>
    export default {
        data(){
          return {
              identity: '',
              password: ''
          }
        },
        methods :{
            join(){
                this.$router.push("/join")
            },
            login_cancel(){
                this.$router.push("/")
            },
            letslogin(){
                this.$store.dispatch("member/login",
                    {identity:this.identity, password:this.password})
            }
        }
    }
</script>

<style scoped>
    #font-right{
        float : right;
    }
    #login{
        height : 600px
    }
    body {
        margin: 0px;
        min-width: 1300px;
        min-height: 5500px;
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
    html {
        height: 100%;
    }
    body {
        margin:0;
        padding:0;
        font-family: sans-serif;
        background: linear-gradient(#141e30, #243b55);
    }
    #join{
        font-size: 10px;
        float : left;
    }
    #privateFind{
        font-size: 10px;
        float: right;
    }
    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: dodgerblue;
        box-sizing: border-box;
        box-shadow: 0 10px 10px gray;
        border-radius: 10px;
    }

    .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
    }

    .login-box .user-box {
        position: relative;
    }

    .login-box .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
    .login-box .user-box label {
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        bold : true;
        color: #fff;
        font-size: 12px;
    }

    .login-box form a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 40px;
        letter-spacing: 4px
    }



    .login-box a span {
        position: absolute;
        display: block;
    }

    .login-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #fff);
        animation: btn-anim1 1s linear infinite;
    }

    .login-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #fff);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
    }

    .login-box a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #fff);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
    }

    .login-box a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #fff);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
    }

</style>