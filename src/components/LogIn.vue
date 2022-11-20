<template>
  <form @submit.prevent="submitHandle">
    <input @keydown="error=null" type="email" autocomplete="username" placeholder="email" v-model="email">
    <input @keydown="error=null" type="password" autocomplete="current-password" required placeholder="password" v-model="password">
    <div><small class="error">{{error}}</small></div>
    <button>Log in</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import useLogIn from "@/composables/useLogIn";
export default {
  setup(props,context){
    let email = ref('')
    let password = ref('')
    const {error,login} = useLogIn

    const submitHandle = async ()=>{
      console.log(await login(email.value,password.value))
      if(!error.value){
         context.emit("login")
      }
    }
    return {email,password,submitHandle,error}
  }
}
</script>

<style scoped>

</style>