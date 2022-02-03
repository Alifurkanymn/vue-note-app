// Important

export const importantData= (state) =>{
    return state.getImportantNotes;
}


// Normal

export const normalData = (state) =>{
    return state.getNormalNotes;
}


// Unhurried

export const unhurriedData = (state) =>{
    return state.getUnhurriedNotes;
}

// Deleted


export const deletedData = (state) =>{
    console.log(state.getDeletedNotes);
    return state.getDeletedNotes;
}


// Favorites

export const favoritesData = (state) =>{
    return state.getFavoritesNotes;
}



// Backgorund

// export const backgroundColor = (state) =>{
//     return state.backgroundColors
// }