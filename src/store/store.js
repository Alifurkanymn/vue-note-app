import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './modules/getters.js';
import * as mutations from './modules/mutations.js';
import * as actions from './modules/actions.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    
    state : {
        getImportantNotes :[],
        getNormalNotes:[],
        getUnhurriedNotes:[],
        getDeletedNotes :[],
        getFavoritesNotes :[],
        onDeleted:[],
    },
    getters,
    mutations,
    actions,
})