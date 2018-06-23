const express = require('express')
const controller = require('../controllers/controller')

let Router = express.Router()

module.exports = Router

// 俩种传参的形式
Router.get('/pages', controller.showWeb)
    // Router.get('/pages/:page', controller.showWeb)