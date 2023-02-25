//* Imports
const { ExtractJwt, Strategy } = require('passport-jwt');
const passport = require('passport');
const { findUserById } = require('../users/users.controllers');
require('dotenv').config();

//* Passport configs
const passportConfigs = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

//* Main function
passport.use( new Strategy( passportConfigs, ( tokenDecoded, done ) => {
    findUserById( tokenDecoded.id )
    .then( data => {
        if( data ){
            done( null, tokenDecoded );
        } else {
            done( null, false );
        };
    })
    .catch( error => {
        done( error, false );
    });
}));

//* Exports
module.exports = passport;