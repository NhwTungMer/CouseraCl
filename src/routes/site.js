const express = require('express')
const router = express.Router()

const siteController =  require('../app/controller/SiteController')
// siteController.index
router.use('/site',siteController.index )


module.exports = router