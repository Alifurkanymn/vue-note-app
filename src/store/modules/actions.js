import axios from 'axios';

export const initDeleted = (context) =>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/deleted.json/`)
    .then(response=>{
        let data = response.data;
        context.commit('initDeletedData',data)
    })
    .catch(error=>{console.log(error)})
}
export const initFavorites = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/favorites.json`)
    .then(response=>{
        let data = response.data;
        context.commit('initFavoritesData',data)
    })
    .catch(error => {console.log(error)})
}
export const initImportant = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/importantNote.json`)
    .then(response => {
            let data = response.data;
            context.commit('initImportantData',data)
        }                    
    )
    .catch(error => {console.log(error)})
}
export const initNormal = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/normalNote.json`)
    .then(response=>{
        let data = response.data;
        context.commit('initNormalData',data)
    })
}
export const initUnhurried = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/unhurriedNote.json`)
    .then(response=>{
        let data = response.data
        context.commit('initUnhurriedData',data)
    })
}
export const addNoteImportant = (context,note)=>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/importantNote.json`, {
        ...note
    })
    .then(() => {
        document.getElementById("Warning").style.display = "block";
        setTimeout(function(){
            document.getElementById("Warning").style.display = "none";
        },3000)
        note = ""
    })
    .catch(e => {
        console.log(e);
    })
}
export const addNoteNormal = (context, note)=>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/normalNote.json`, {
        ...note
    })
    .then(() => {
        document.getElementById("Warning").style.display = "block";
        setTimeout(function(){
            document.getElementById("Warning").style.display = "none";
        },3000)
        note = ""
    })
    .catch(e=>{
        console.log(e);
    })
}
export const addNoteUnhurried = (context, note)=>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/unhurriedNote`, {
        ...note
    })
    .then(() => {
        document.getElementById("Warning").style.display = "block";
        setTimeout(function(){
            document.getElementById("Warning").style.display = "none";
        },3000)
        note = ""
    })
    .catch(e=>{
        console.log(e);
    })
}