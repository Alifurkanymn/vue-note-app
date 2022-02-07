// Important

export const initImportantData = (state,getImportantNotes)=>{
    state.getImportantNotes = getImportantNotes;
}
export const addImportantNotes = (state,note)=>{
    state.getImportantNotes.push(note)
}

// Normal

export const initNormalData = (state,getNormalNotes)=>{
    state.getNormalNotes = getNormalNotes;
}
export const addNormalNotes = (state,note)=>{
    state.getNormalNotes.push(note)
}


// Unhurried
 
export const initUnhurriedData = (state,getUnhurriedNotes)=>{
    state.getUnhurriedNotes = getUnhurriedNotes;
}
export const addUnhurriedNotes = (state,note)=>{
    state.getUnhurriedNotes.push(note)
}


// Deleted

export const initDeletedData = (state, getDeletedNotes) =>{
    state.getDeletedNotes = getDeletedNotes;
}

export const addDeletedData = (state,note)=>{
    state.onDeleted.push(note);
}

export const inDeleted = (state, noteId) =>{
    let index = state.getDeletedNotes.findIndex(c=> c.id == noteId)
    if(index > -1){
        state.getDeletedNotes.splice(index, 1)
    }
}

// Favorites

export const initFavoritesData = (state,getFavoritesNotes)=>{
    state.getFavoritesNotes = getFavoritesNotes;
}
export const addFavoritesData = (state,note)=>{
    state.getFavoritesNotes.push(note);
}

// Background

// export const backgroundColor = (state,getBackgroundColor) =>{
//     state.backgroundColors = getBackgroundColor;
// }