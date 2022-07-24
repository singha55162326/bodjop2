const express = require('express');
const router = express.Router();
const basicAuth = require('express-basic-auth')



router.use(require('./api_auth'));
router.use(require('./api_customer'));
router.use(require('./api_employee'));
// router.use(require('./api_price'));
router.use(require('./api_order',));
router.use(require('./api_transport'));
router.use(require('./api_document'));
router.use(require('./api_car'));
router.use(require('./api_oil'));
router.use(require('./api_category'));
router.use(require('./api_sale'));
router.use(require('./api_supplier'));
module.exports = router;