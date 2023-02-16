const { Stop, Route, StopRoute } = require('../models')

const create = async(req,res) => {

  try {
    const stop = await Stop.create(req.body)
    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const stops = await Stop.findAll({
      include: [
        { model: Route, as: "routes", through: { attributes: [] } },
      ]
    })
    res.status(200).json(stops)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const stop = await Stop.findByPk(req.params.id)
    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}


const update = async (req, res) => {
  try {
    const stop = await Stop.findByPk(req.params.id)
    stop.set(req.body)
    await stop.save()

    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteStop = async (req,res) =>{
  try {
    // We can also call destroy on an instance:
    const stop = await Stop.findByPk(req.params.id)
    await stop.destroy()
    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}

const associateRoute = async (req, res) => {
  try {
    // destructuring catId and toyId from req.params
    const { stopId, routeId } = req.params

    const association = await StopRoute.create({
      stopId: routeId, routeId: stopId
    })

    res.status(200).json(association)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  delete : deleteStop,
  associateRoute,
}