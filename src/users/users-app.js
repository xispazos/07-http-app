import userStore from "./store/user-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButton } from "./presentation/render-buttons/render-buttons";

/**
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {

    element.innerHTML = 'Loading...';
    await userStore.loadNextPage ();
    element.innerHTML = ``;
    
   renderTable(element);
   renderButton(element);
};