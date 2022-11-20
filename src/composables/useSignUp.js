import {ref} from "vue";
import {projectAuth} from "@/firebase/config";

let error = ref(null)
const signUp = async (email,password,displayName)=>{
    error.value = null
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw Error ("Could not complete the sign up")
        }
        await res.user.updateProfile({displayName })
        error.value = null
        console.log(res.user)
        return res


    }catch(err){
            error.value = err.message
            console.log(error.value)
    }


}
const useSignUp = ()=>{
    return {signUp,error}
}
export default useSignUp()