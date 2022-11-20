<template>
  <div class="welcome container">
      <div v-if="signUpLogin">
        <LogIn @login="enterChatRoom"/>
        <p>Not register yet ? <span @click="signUpLogin = false">Sign up</span></p>
      </div>
    <div v-else>

      <SignUp @signup="enterChatRoom"/>
      <p>You have already an account ? <span @click="signUpLogin = true">Log in</span></p>
    </div>

  </div>
</template>

<script>
import SignUp from "@/components/SignUp";
import LogIn from "@/components/LogIn";
const router = useRouter()
import {ref} from "vue"
import {useRouter} from "vue-router";
export default {
  components: {LogIn, SignUp},
  setup(){
    let signUpLogin = ref(true)
  const router = useRouter()
    const enterChatRoom = ()=>{
      router.push({name:'chatRoom'})
    }
    return{signUpLogin,enterChatRoom}
  }
}
</script>

<style>
  .welcome{
    text-align: center;
    padding:20px 0px;
  }
  .welcome form{
    max-width:400px;
    margin: 20px auto;
  }
  .welcome input{
    width:80%;
    max-width:100%;
    padding:15px 13px;
    border:none;
    border-bottom: 1px solid rgba(169, 169, 169, 0.45);
    margin: 10px auto;
    outline: none;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor:pointer;
  }
</style>