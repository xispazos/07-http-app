import userStore from '../../store/user-store';
import './render-buttons.css';
import {renderTable} from '../render-table/render-table';

/**
 * @param {HTMLDivElement} element
 */
export const renderButtons = ( element ) => {

    const nextBtn = document.createElement ('button');
    nextBtn.innerText = ' Next >';

    const prevBtn = document.createElement ('button');
    prevBtn.innerText = '<  Prev ';

    const currentPageLabel = document.createElement ('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = userStore.getCurrentPage();


    element.append( prevBtn, currentPageLabel, nextBtn );

    nextBtn.addEventListener( 'click',async() => {

        await userStore.loadNextPage();
        currentPageLabel.innerText = userStore.getCurrentPage();
        renderTable( element );

   });

    prevBtn.addEventListener( 'click', async () => {
        await userStore.loadPreviousPage();
        currentPageLabel.innerText = userStore.getCurrentPage();
        renderTable( element );
    })

}

