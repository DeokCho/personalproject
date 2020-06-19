<template>
    <form id="login">
        <div class="join-box">
            <h2>회원가입</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="">
                    <label>ID</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="">
                    <label>Password</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="">
                    <label>주민등록번호</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="">
                    <label>주소</label>
                </div>

                <a id="join_confirm" @click="join_confirm">등록</a>
                <a id="join_cancel" @click="join_cancel">취소</a>
            </form>
        </div>


    </form>
</template>

<script>
    export default {
        name: "Join",
        methods:{
            join_cancel(){
                this.$router.push("/")
            },
            join_confirm(){
                this.$store.dispatch("")
            }


        }
    }
</script>

<style scoped>
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
    #join_confirm{
        font-size: 20px;
        float : left;
    }
    #join_cancel{
        font-size: 20px;
        float: right;
    }
    .join-box {
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

    .join-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
    }

    .join-box .user-box {
        position: relative;
    }

    .join-box .user-box input {
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
    .join-box .user-box label {
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }

    .join-box .user-box input:focus ~ label,
    .join-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        bold : true;
        color: #fff;
        font-size: 12px;
    }

    .join-box form a {
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



    .join-box a span {
        position: absolute;
        display: block;
    }

    .join-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #fff);
        animation: btn-anim1 1s linear infinite;
    }

    .join-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #fff);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
    }

</style>