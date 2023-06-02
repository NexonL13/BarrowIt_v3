const { Asset } = require("../models")

const asset = async (req, res) => {
  const assetId = req.params.id
  const asset = await Asset.findOne({ where: { id: assetId } })
  res.status(200).json(asset)
}

const listOfAssets = async (req, res) => {
  const listOfAsset = await Asset.findAll({ order: [["createdAt", "DESC"]] })
  res.status(200).json(listOfAsset)
}

const add = async (req, res) => {
  const asset = {
    image: req.file.filename,
    name: req.body.name,
    brand: req.body.brand,
    condition: req.body.condition,
    category: req.body.category,
    acquired_date: req.body.acquired_date,
    lifespan: req.body.lifespan,
    maintenance_date: req.body.maintenance_date,
    admin_id: req.user.id,
  }

  await Asset.create(asset)
  res.status(200).json({ message: "Asset added successfully" })
}

const update = async (req, res) => {
  const assetId = req.params.id
  const asset = {
    name: req.body.name,
    brand: req.body.brand,
    condition: req.body.condition,
    category: req.body.category,
    acquired_date: req.body.acquired_date,
    lifespan: req.body.lifespan,
    maintenance_date: req.body.maintenance_date,
    admin_id: req.user.id
  }
  {
    req.file && (asset.image = req.file.filename)
  }
  await Asset.update(asset, { where: { id: assetId } })
  res.status(200).json({ message: "Asset updated successfully" })
}

const remove = async (req, res) => {
  const assetId = req.params.id
  await Asset.destroy({ where: { id: assetId }, admin: req.user})
  res.status(200).json({ message: "Asset deleted successfully" })
}

module.exports = { asset, listOfAssets, add, update, remove }
