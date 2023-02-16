const { Route } = require("../models")

const create = async (req, res) => {
  try {
    const route = await Route.create(req.body)
    res.status(200).json(route)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}