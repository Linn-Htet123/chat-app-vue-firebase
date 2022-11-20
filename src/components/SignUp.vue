<template>
  <form @submit.prevent="submitHandle">
    <input @keydown="error=null" type="text" autocomplete="username" class="input" required placeholder="user name" v-model="displayName">
    <input @keydown="error=null" type="email" autocomplete="username" placeholder="email" v-model="email">
    <input @keydown="error=null" type="password" autocomplete="current-password" required placeholder="password" v-model="password">
    <div>
     <small class="error">{{error}}</small>
   </div>
    <button>Sign up</button>

  </form>
</template>

<script>
import {ref} from 'vue'
import useSignUp from "@/composables/useSignUp";
export default {
  setup(props,context){
    let displayName = ref('')
    let email = ref('')
    let password = ref('')
    const {error,signUp} = useSignUp

    const submitHandle = async ()=>{
      await signUp(email.value,password.value,displayName.value)
      if(!error.value){
        context.emit("signup")
      }
    }
    return { displayName,email,password,submitHandle,error}
  }
}
</script>

<style scoped>

</style>