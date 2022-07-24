const express = require('express');
const router = express.Router();

const cors = require('cors');
router.use(cors());

router.use(require('./api_auth'));
router.use(require('./api_customer'));
router.use(require('./api_employee'));
router.use(require('./api_price'));
router.use(require('./api_order'));
router.use(require('./api_delivery'));
router.use(require('./api_document'));
module.exports = router;