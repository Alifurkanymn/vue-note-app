// Important

export const initImportantData = (state,getImportantNotes)=>{
    state.getImportantNotes = getImportantNotes;
}
export const addImportantNotes = (state,note)=>{
    console.log(note)
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


// Favorites

export const initFavoritesData = (state,getFavoritesNotes)=>{
    state.getFavoritesNotes = getFavoritesNotes;
}
export const addFavoritesData = (state,note)=>{
    state.getFavoritesNotes.push(note);
}
