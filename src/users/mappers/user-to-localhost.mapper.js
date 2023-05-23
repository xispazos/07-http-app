import { User } from "../models/users";

/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( user ) => {

    const {
        id,
        avatar,
        balance,
        gender,
        lastName,
        firstName,
    } = user;

    return {
        id,
        avatar,
        balance,
        gender,
        last_name: lastName,
        first_name: firstName,
    }



}
