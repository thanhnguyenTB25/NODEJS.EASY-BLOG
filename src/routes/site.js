
const express = require('express')
const router = express.Router();
const siteController = require('../app/controller/site.controller.js');
/**
 * note: chỉ được tham chiếu đến method index, không dùng dấu () sau index vì hàm sẽ thực thi ngay
 */
router.get('/',siteController.index);
router.post('/',siteController.createIndex);
router.get('/:slug',siteController.show);
module.exports = router;



