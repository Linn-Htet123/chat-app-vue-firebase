<template>
    <nav v-if="user">
      <div>
        <h3>{{user.displayName}}</h3>
        <p>{{user.email}}</p>
      </div>
      <div>
        <button @click="logOutHandle">Log out</button>
      </div>
    </nav>
</template>

<script>
import useLogOut from "@/composables/useLogOut";
import getUser from "@/composables/getUser";
export default {
    setup(){
        let {error,logout} = useLogOut()
        let {user} = getUser()
          const logOutHandle = async ()=>{
              await logout()
          }
          return {logOutHandle,user,error}
    }

}
</script>

<style scoped>
    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:20px 20px;
    }
    h3,p{
      padding:0;
      margin:0
    }
    p{
      color: #9a9696;
    }

</style>