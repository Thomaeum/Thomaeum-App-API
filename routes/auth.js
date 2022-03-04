/**
 * This Router handles all Requests send to /auth
 * @type {Router}
 */

const router = require('express').Router();
const logger = log4js.getLogger('auth')

// Requests here
//TODO choose libary and implement Oauth2.0 or something

module.exports = router;

logger.info('Loaded Authentication-Route')