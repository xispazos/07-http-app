import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderAddButton = ( element, callback ) => {

    const fabButton = document.createElement( 'button' );
    fabButton.innerText = '+';
    fabButton.classList.add( 'fab-button' );

    element.append( fabButton );

    //TODO: Add later
    fabButton.addEventListener( 'click', () => {
        showModal ();
    });

    //MIRA NOTA MIN 1:56 LECCION 168 
    


};