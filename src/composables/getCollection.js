import {projectFirestore} from "@/firebase/config";
import {ref, watchEffect} from "vue";

const getCollection = (collection)=>{
    let documents = ref(null)
    let error = ref(null)
  let collectionRef =  projectFirestore.collection(collection).orderBy('createdAt')
        const unsub = collectionRef.onSnapshot((snap)=>{
                let results = []
            snap.docs.map((doc)=>{

             doc.data().createdAt && results.push({...doc.data(), id:snap.id})

                documents.value = [...results]
            })

            error.value = null
        },(err)=>{
                console.log(err.message)
                error.value = 'could not fetch data'
        })

    watchEffect((onInvalidate)=>{
        onInvalidate(()=>unsub())
    })
    return{documents,error}
}
export default getCollection