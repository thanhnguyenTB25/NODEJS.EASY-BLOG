
const express = require('express');
const router = express.Router();
const CourseController = require('../app/controller/blogs.controller.js');
/**
 * note: chỉ được tham chiếu đến method index, không dùng dấu () sau index vì hàm sẽ thực thi ngay
 */

router.get('/create',CourseController.create);
router.post('/store',CourseController.store);
router.get('/:id/edit',CourseController.edit);
router.post('/handleFormActions',CourseController.handleFormAction)
router.put('/:id',CourseController.update);
router.patch('/:id/restore',CourseController.restoreBlogs)
router.delete('/:id',CourseController.deleteBlogs);
router.delete('/:id/force',CourseController.forcedeleteBlogs);
router.get('/:slug',CourseController.show);

module.exports = router;