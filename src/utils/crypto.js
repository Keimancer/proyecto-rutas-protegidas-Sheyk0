//* Import
const bcrypt = require('bcrypt');

//* Syncronic password encryptation
const hashPassword = plainPassword => {
    return bcrypt.hashSync( plainPassword, 10 );
};

const comparePassword = ( plainPassword, encryptedPassword ) => {
    return bcrypt.compareSync( plainPassword, encryptedPassword );
};

module.exports = {
    hashPassword,
    comparePassword
};