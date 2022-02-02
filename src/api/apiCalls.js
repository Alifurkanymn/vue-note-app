export const getDelete = () =>{
    return axios.get(`https://vue-note-app-be493-default-rtdb.firebaseio.com/deleted.json/`);
};