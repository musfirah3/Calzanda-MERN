const app = require('express')
const router = app.Router()
const { placeOrder, allOrders, trackOrder,addOrder } = require('./controller')

router.post('/place-order', placeOrder)
router.get('/get-all-orders', allOrders)
router.post('/create-order',addOrder)
router.get('/track-order/:_id', trackOrder)


module.exports = router