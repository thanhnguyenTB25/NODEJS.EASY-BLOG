
const Blogs = require("../model/blogs.js")
const {mutipleMongooseToObj, mongooseToObject} = require("../../until/mongoose.js")
class CourseController {



    // METHOD [GET] /blogs/:slug
    async show(req,res,next) {
        // const {slug} = req.params;
        await Blogs.findOne({slug: req.params.slug})
            .then((myBlog)=> 
                res.render('blogs/show', {
                    myBlog: mongooseToObject(myBlog)
                })
            )
            .catch(next);
    }
    // METHOD [POST] /blogs/:slug
    create(req, res, next) {
        res.render('blogs/create')
    }

    async store(req,res,next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${formData.videoID}/hqdefault.jpg`
        const blog = new Blogs(formData);
        await blog.save()
            .then(()=> res.redirect('/me/store/blogs'))
            .catch(next)
    }
    // [get] /blogs/:id/edit
    async edit(req, res, next) {
        await Blogs.findById(req.params.id)
            .then(blogs => 
                res.render('blogs/edit', {
                    blogs: mongooseToObject(blogs),
                })
            )
            .catch(next)
    }
    // [PUT] /blogs/:id
    async update(req,res,next) {
        const {id} = req.params
        await Blogs.updateOne({_id:id}, req.body)
            .then(()=> res.redirect('/me/store/blogs')
            )
            .catch(next)
    }
    // [DELETE] /blogs/:id
    deleteBlogs(req,res,next) {
        const {id} = req.params;
        // using mongoosedelete library
        Blogs.delete({_id:id})
            .then(()=> res.redirect('back')
            )
            .catch(next)
    }
    // [DELETE] /blogs/:id/force
    forcedeleteBlogs(req,res,next) {
        const {id} = req.params;
        // using mongoose to delete force(xoá vĩnh viễn)
        Blogs.deleteOne({_id:id})
            .then(()=> res.redirect('back')
            )
            .catch(next)
    }
    // [PATCH] /blogs/:id/restore
    restoreBlogs(req,res,next) {
        // const {id} = req.params;
        Blogs.restore({_id: req.params.id})
            .then(()=> {
                res.redirect('back')
            })
            .catch(next)
    }
    handleFormAction(req,res,next) {
        res.status(200).json(req.body);
    }
};

module.exports = new CourseController;

/**
 * descripts: req.body là một thuộc tính chứa dữ liệu được gửi từ client đến server thông qua phương thức POST của HTTP request. Khi client gửi dữ liệu từ một biểu mẫu HTML hoặc thông qua một yêu cầu AJAX,
 * dữ liệu đó được gửi dưới dạng các cặp key-value và được nhận và xử lý bởi server.
 */


// async delete(req,res,next) {
//     const {id} = req.params.id;
//     await Blogs.deleteOne({_id: id}, req.body)
//         .then(()=> 
//             res.redirect('back')
//         )
//         .catch(next)
// }