import axios from 'axios';
axios.defaults.withCredentials = false

// Important Actions

export const initImportant = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/importantNote.json`)
    .then(response => {
            let data = response.data;
            context.commit('initImportantData',data)
        }                    
    )
    .catch(error => {console.log(error)})
}


export const addNoteImportant = (context,note)=>{
    return axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/importantNote.json`, JSON.stringify(note))
    .then(() =>{
        context.commit('addImportantNotes', {...note})
        note = ""
    }).catch(e=>{
        console.log(e)
    })
}



// Normal Actions

export const initNormal = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/normalNote.json`)
    .then(response=>{
        let data = response.data;
        context.commit('initNormalData',data)
    })
}

export const addNoteNormal = (context,note)=>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/normalNote.json`, JSON.stringify(note))
    .then(response =>{
        context.commit('addNormalNotes', {id : response.data.name, ...note})
        note = ""
    }).catch(e=>{
        console.log(e)
    })

}


// Unhurried Actions

export const initUnhurried = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/unhurriedNote.json`)
    .then(response=>{
        let data = response.data
        context.commit('initUnhurriedData',data)
    })
}


export const addUnhurriedNotes = (context, note) =>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/normalNote.json`, JSON.stringify(note))
    .then(response =>{
        context.commit('addUnhurriedNotes', {id : response.data.name, ...note})
        note = ""
    }).catch(e=>{
        console.log(e)
    })
}


export const addNoteUnhurried = (context, note)=>{
    return axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/unhurriedNote.json`, {
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




// Deleted Actions

export const initDeleted = (context) =>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/deleted.json`)
    .then(response=>{
        let data = response.data;
        context.commit('initDeletedData',data);
    })
    .catch(error=>{console.log(error)})
}



export const deleted = (context, noteID) => {
    axios.delete(`https://vue-note-app-be493-default-rtdb.firebaseio.com/deleted/${noteID}.json`,)
    .then(() => {
        console.log(noteID);
    })
}

export const postDeleted = (context, note) =>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/deleted.json`, JSON.stringify(note))
    .then(response =>{
        note.id = response.data.name
        context.commit('initDeletedData', {...note})
    })
}



// Favorites Actions

export const initFavorites = (context)=>{
    axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/favorites.json`)
    .then(response=>{
        let data = response.data;
        context.commit('initFavoritesData',data)
    })
    .catch(error => {console.log(error)})
}

export const postFavorite = (context, note) =>{
    axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/favorites.json`, JSON.stringify(note))
    .then(response =>{
        context.commit('addFavoritesData', {id : response.data.name, ...note})
    })
}