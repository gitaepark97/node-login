'use strict'

const router = require('express').Router()

const ctrl = require('./home.ctrl')

router.get('/', ctrl.home)
router.get('/login', ctrl.login)

module.exports = router
