export const initDeletedData = (state, getDeletedNotes) =>{
    state.getDeletedNotes = getDeletedNotes;
}
export const initFavoritesData = (state,getFavoritesNotes)=>{
    state.getFavoritesNotes = getFavoritesNotes;
}
export const initImportantData = (state,getImportantNotes)=>{
    state.getImportantNotes = getImportantNotes;
}
export const initNormalData = (state,getNormalNotes)=>{
    state.getNormalNotes = getNormalNotes;
}
export const initUnhurriedData = (state,getUnhurriedNotes)=>{
    state.getUnhurriedNotes = getUnhurriedNotes;
}