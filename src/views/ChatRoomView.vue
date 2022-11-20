<template>
    <div class="container">
      <NavBar/>
      <chatWindow/>
      <chatForm/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";
import chatForm from "@/components/chatForm";
import chatWindow from "@/components/chatWindow";
export default {
    components:{NavBar,chatForm,chatWindow},
    setup(){
        const router = useRouter()
        const {user} = getUser()
        watch(user,()=>{
          if(!user.value){
            if(!user.value){
              router.push({name:'welcome'})
            }
          }
        })


  }

}
</script>

<style scoped>

</style>