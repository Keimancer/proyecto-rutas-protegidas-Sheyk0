const router = require('express').Router()
const passportJwt = require('../middlewares/auth.middleware');

const userServices = require('./users.services')

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postNewUser)

//* Protected GET my user
router.get( '/me', passportJwt.authenticate( 'jwt', { session: false } ), userServices.getMyUser );

//* Protected PATCH my user
router.patch( '/me', passportJwt.authenticate( 'jwt', { session: false } ), userServices.patchMyUser );

//* Protected DELETE my user
router.delete( '/me', passportJwt.authenticate( 'jwt', { session: false } ), userServices.deleteMyUser );

router.get('/:id', userServices.getUserById)
router.patch('/:id', passportJwt.authenticate( 'jwt', { session: false } ), userServices.patchUser)
router.delete('/:id', passportJwt.authenticate( 'jwt', { session: false } ), userServices.deleteUser)

module.exports = router