
const express = require('express')
const router = express.Router();
const MystoreController =require('../app/controller/mystore.controller.js')
/**
 * note: chỉ được tham chiếu đến method index, không dùng dấu () sau index vì hàm sẽ thực thi ngay
 */
router.get('/store/blogs',MystoreController.storeBlogs);
router.get('/trash/blogs',MystoreController.trashBlogs);
module.exports = router;