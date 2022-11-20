import {ref} from 'vue'
import {projectAuth} from "@/firebase/config";

let error = ref(null)
const logout = async ()=>{
    error.value = null
        try{
            await projectAuth.signOut()
            error.value= null
        }catch(err){
            error.value = err.message
            console.log(error.value)
        }
}

const useLogOut = ()=>{
        return{error,logout}
}

export default useLogOut