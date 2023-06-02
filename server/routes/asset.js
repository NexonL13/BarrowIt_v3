const express = require("express")
const router = express.Router()
const asset = require("../controllers/assetController")
const { upload } = require("../middleware/upload")

router.get("/:id", asset.asset)
router.get("/", asset.listOfAssets)

router.post("/add", upload, asset.add)

router.put("/update/:id", upload, asset.update)

router.delete("/delete/:id", asset.remove)

module.exports = router
