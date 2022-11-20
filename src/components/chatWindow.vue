<template>
  <div class="chat-window" >
    <div v-if="error" class="error"> {{error}}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="document in formattedDocuments" :key="document.id" class="single">
        <span class="created-at">{{document.createdAt}}</span>
        <span class="name">{{document.name}}</span>
        <span class="message">{{document.message}}</span>
      </div>
    </div>
  </div>


</template>

<script>
import getCollection from "@/composables/getCollection";
import {computed,ref,onUpdated} from "vue";
import {formatDistanceToNow} from 'date-fns'
export default {

    setup(){

      const {error,documents} = getCollection('messages')
      const formattedDocuments = computed(()=>{
          if(documents.value){
            return documents.value.map((doc)=>{
              let time = formatDistanceToNow(doc.createdAt.toDate())

              return {...doc,createdAt:time}
            })
          }
      })
      const messages = ref(null)
      onUpdated(()=>{
          messages.value.scrollTop = messages.value.scrollHeight
      })
     return{error,documents,formattedDocuments,messages}
    }
}
</script>

<style scoped>
  .chat-window{
    background-color: rgba(255, 255, 255, 0.34);
    padding:20px 20px;

  }
  .messages{
    height: 400px;
    overflow-y: scroll;
  }
  .single{
    margin:18px 0px;
  }
  .created-at{
    display: block;
    color:#999;
    font-size:12px;
    margin-bottom: 4px;
  }
  .name{
    display: block;
    font-size: 17px;
    font-weight: bold;
  }
  .message{
    max-height: 400px;
    overflow: auto;
  }
</style>