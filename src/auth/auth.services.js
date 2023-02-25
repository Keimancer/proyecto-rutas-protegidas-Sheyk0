//* Imports
const checkUserCredentials = require('./auth.controllers');
const response = require('../utils/responses.handler');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//* Login
const postLogin = ( req, res ) => {
    const { email, password } = req.body;
    checkUserCredentials( email, password )
        .then( data => {
            if( data ){
                const token = jwt.sign({
                    id: data.id,
                    email: data.email,
                }, process.env.JWT_SECRET, {
                    expiresIn: '1d'
                });
                response.success({
                    res,
                    status: 200,
                    message: 'Credentials authenticated successfully.',
                    data: token
                });
            } else {
                response.error({
                    res,
                    status: 401,
                    message: 'Invalid credentials.'
                });
            };
        })
        .catch( error => {
            response.error({
                res,
                status: 400,
                data: error,
                message: 'Something bad happened with this request.'
            });
        });
};

//* Exports
module.exports = postLogin;