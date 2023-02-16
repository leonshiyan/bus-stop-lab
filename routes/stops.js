const router = require('express').Router()
const stopsCtrl = require('../controllers/stops.js')

router.get('/', stopsCtrl.index)
router.get('/:id', stopsCtrl.show)
router.post('/',stopsCtrl.create)
router.post('/:stopId/routes/:routeId', stopsCtrl.associateRoute)
router.put('/:id',stopsCtrl.update)
router.delete('/:id',stopsCtrl.delete)
module.exports = router
