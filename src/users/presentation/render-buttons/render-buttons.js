import userStore from '../store/user-store';

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

    

}

