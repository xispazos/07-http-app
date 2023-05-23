import modalHTML from './render-modal.html?raw';
import './render-modal.css';
let modal, form;

//TODO CARGAR USUSARIO POR ID
export const showModal = () => {
    modal.classList.remove('hide-modal');
}

export const hideModal = () => {
    
    modal.classList.add('hide-modal');
    form?.reset(); //Literalmente resetea el formulario
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback ) => {
    
    if (!callback) {
        throw new error ( 'Usuario no implementado' );
    }
    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');
    
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container'){
         hideModal();
        }
        // De esta forma pueden cerrar ek formulario dando fuera 
     });

     form.addEventListener('submit', async (event) => {
             event.preventDefault();
             hideModal(); //No necesario

              //Formulario enviado
             
             const formData = new FormData(form);
             const userLike = {};

             for (const [key, value ] of formData) {

                if (key === 'balance') {
                    userLike[key] = +value;
                    continue; //Haz la siguiente iteration del ciclo
                }
                    //VALIDACIONES
                
                  if (key === 'isActive') {
                    userLike[key] = (value === 'on') ? true : false;
                    continue; //Haz la siguiente iteration del ciclo     
                }

                userLike[key] = value;


             }
             //PARA GUARDAR USUARIO

             await callback( userLike );
             

             hideModal();

            
         });

    
    
    element.append( modal );

    
}
