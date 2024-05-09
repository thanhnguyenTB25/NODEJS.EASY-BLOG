
const express = require('express')
const router = express.Router();
const NewsController =require('../app/controller/news.controller.js')
/**
 * note: chỉ được tham chiếu đến method index, không dùng dấu () sau index vì hàm sẽ thực thi ngay
 */
router.get('/:slug',NewsController.show)
router.get('/',NewsController.index)

module.exports = router;