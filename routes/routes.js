const router = require('express').Router()
const routesCtrl = require('../controllers/routes.js')

// Routes
router.post('/', routesCtrl.create)

module.exports = router
