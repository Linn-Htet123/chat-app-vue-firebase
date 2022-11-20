<template>
  <div>
    <form @submit.prevent="submitHandle">
      <textarea placeholder="Enter a text" required v-model="message" @keydown.enter.prevent="submitHandle"></textarea>
      <button>send</button>
    </form>
    <div class="error">{{error}}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import getUser from "@/composables/getUser";
import {timestamp} from "@/firebase/config";
import useCollection from "../composables/useCollection";

export default {
  setup(){
    let message = ref('')
    const {addDoc, error} = useCollection("messages")
    const {user} = getUser()
   const submitHandle =async ()=>{
      const chat = {
        name:user.value.displayName,
        message:message.value,
        createdAt:timestamp,
      }
      await addDoc(chat)
     message.value = ''
   }
    return{submitHandle,message,addDoc, error}
  }

}
</script>

<style scoped>
  form{
    margin:10px;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
  }
  textarea{
    width:85%;
    height: 30px;
    margin-bottom:13px ;
    max-width:100%;
    outline:none;
    border:none;
    font-size: 18px;
  }

</style>