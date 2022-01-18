import Home from './components/HomePage/Home.vue'
import AddNote from './components/AddNote/AddNote.vue'
import Favorites from './components/Favorites/Favorites.vue'
import Deleted from './components/Deleted/Deleted.vue'

export const routes =[
    { path: '/', component : Home},
    { path: '/addnote', component: AddNote},
    { path: '/favorites', component: Favorites},
    { path: '/deleted', component: Deleted}
];