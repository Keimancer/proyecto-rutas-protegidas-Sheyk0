//* Imports
const router = require('express').Router();
const postLogin = require('./auth.services');

//* Route
router.post( '/login', postLogin );

//* Exports
module.exports = router;