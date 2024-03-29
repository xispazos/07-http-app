import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
   
    const users = await loadUsersByPage( state.currentPage + 1 );
    if ( users.length === 0 ) return; // Si users es igual a 0, no regresa nada

    //state.currentPage = state.currentPage + 1
    state.currentPage += 1;
    state.users = users;

}
const loadPreviousPage = async () => {

    if ( state.currentPage === 1 ) return;
    
    const users = await loadUsersByPage(state.currentPage - 1 );
    state.currentPage -= 1;
    state.users = users;

    /**REVISA NOTAS: MIN 3:31 - LECCION 167 */

}


const onUserChanged = async () => {

    throw new Error ('No implementado');

}
const reloadPage = async () => {

    throw new Error ('No implementado');

}

export default {

loadNextPage,
loadPreviousPage,
onUserChanged,
reloadPage,

/**
 * 
 * @returns {User[]}
 */
getUsers: () => [...state.users],

/**
 * 
 * @returns {User[]}
 */
getCurrentPage: () => state.currentPage



} 