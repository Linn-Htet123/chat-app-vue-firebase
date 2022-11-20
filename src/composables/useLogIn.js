import {ref} from 'vue'
import {projectAuth} from "@/firebase/config";

const error = ref(null)
const login = async (email,password,displayName)=>{
    error.value = null
   try{
       const res = await projectAuth.signInWithEmailAndPassword(email,password)
       error.value = null
       return res
   }catch(err){
       error.value = err.message
       console.log(error.value)
   }

}
const useLogin  = ()=>{
    return {error,login}
}

export default useLogin()