//* Imports
const { findUserByEmail } = require('../users/users.controllers');
const { comparePassword } = require('../utils/crypto');

//* Checking credentials
const checkUserCredentials = async ( email, password ) => {
    try {
        const user = await findUserByEmail( email );
        const verifyPassword = comparePassword( password, user.password );
        if( verifyPassword ){
            return user;
        } else {
            return false;
        };
    } catch ( error ) {
        return false;
    };
};

//* Exports
module.exports = checkUserCredentials;