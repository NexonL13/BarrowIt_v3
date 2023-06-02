const { Audit, Asset, Admin } = require("../models")

const auditList = async (req, res) => {
  const listOfAudit = await Audit.findAll()
  res.json(listOfAudit)
}

Asset.afterCreate(async (asset) => {
  const actor = await Admin.findOne({
    where: { id: asset?.admin_id },
  })
  await Audit.create({
    recordId: asset?.id,
    actor: `${actor?.firstName} ${actor?.lastName}`,
    description: `${asset?.name} has been created`,
    role: actor?.role,
  })
})

Asset.afterBulkUpdate(async (asset) => {
  const actor = await Admin.findOne({
    where: { id: asset?.attributes.admin_id },
  })
  const assetData = await Asset.findOne({ where: { id: asset?.where.id } })
  console.log(actor)
  console.log(assetData)
  await Audit.create({
    recordId: assetData?.id,
    actor: `${actor?.firstName} ${actor?.lastName}`,
    description: `${assetData?.name} has been updated`,
    role: actor?.role,
  })
})

Asset.beforeBulkDestroy(async (asset) => {
  const deleted = await Asset.findOne({ where: { id: asset?.where.id } })
  const actor = asset?.admin.dataValues
  const assetData = deleted?.dataValues
  await Audit.create({
    actor: `${actor?.firstName} ${actor?.lastName}`,
    description: `${assetData?.name} has been deleted`,
    role: actor?.role,
  })
})

module.exports = auditList
