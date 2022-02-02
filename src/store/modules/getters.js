export const deletedData = (state) =>{
    return state.getDeletedNotes;
}

export const favoritesData = (state) =>{
    return state.getFavoritesNotes;
}

export const importantData= (state) =>{
    return state.getImportantNotes;
}

export const normalData = (state) =>{
    return state.getNormalNotes;
}

export const unhurriedData = (state) =>{
    return state.getUnhurriedNotes;
}