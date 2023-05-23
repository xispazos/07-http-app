import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/users'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) =>{

    const user = new User(userLike);
    
    const userToSave = userModelToLocalhost (user);

    if (user.id) {
        throw 'No implementada la actualización'
        return;
    }
    
    const updateUser = await createUser(userToSave);
    return updateUser;

    }
 // Esto sería el usuario que debo grabar en el backend

 /**
  * @param {Like<User>} user
  */
    const createUser = async( user ) => {

        const url = `${ import.meta.env.VITE_BASE_URL }/users`;
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const newUser = await response.json();
        console.log({newUser});
        return newUser;
    }