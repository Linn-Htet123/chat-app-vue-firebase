import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView'
import ChatRoomView from "@/views/ChatRoomView";
import {projectAuth} from "@/firebase/config";

let requireRedirect = (to,from,next)=>{
  let user = projectAuth.currentUser
  if(!user){
    next({name:'welcome'})
  }else{
    next()
  }
}
let requireLoginedRedirect = (to,from,next)=>{
  let user = projectAuth.currentUser
  if(user){
    next({name:'chatRoom'})
  }else{
    next()
  }
}
const routes = [
  {
    path:'/',
    name:'welcome',
    component:WelcomeView,
    beforeEnter:requireLoginedRedirect
  },
  {
    path:'/chatRoom',
    name:'chatRoom',
    component:ChatRoomView,
    beforeEnter:requireRedirect
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
