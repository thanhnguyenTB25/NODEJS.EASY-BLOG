/**
 * note: async,await <=> promise(xử lý bất đồng bộ)
 *  search: inhandle object literial, destructuring,...
 */


const Blogs = require("../model/blogs.js");
const {mutipleMongooseToObj, mongooseToObject} = require("../../until/mongoose.js");
class MystoreController {
    // METHOD [GET] /me/store/blogs
    
    async storeBlogs(req,res,next) {
        let blogQuery = Blogs.find({});
        console.log(req.query)
        if (req.query.hasOwnProperty('_sort')) { 
            blogQuery = blogQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([blogQuery, Blogs.findWithDeleted({deleted:true}) ])
            .then(([blogs, deletedblogs]) => {
                const deletedCount = deletedblogs.length
                console.log(deletedCount)
                return res.render('me/storeBlogs', {
                    deletedCount: deletedCount,
                    blogs: mutipleMongooseToObj(blogs)
                })
            }

            )
            .catch(next)
    }
    // METHOD [GET] /me/trash/blogs
    async trashBlogs(req, res, next) {
        await Blogs.findWithDeleted({deleted:true})
            .then(blogs=> {
                res.render('me/trashBlogs', {blogs: mutipleMongooseToObj(blogs)})
            })
            .catch(next)
    }
};

module.exports = new MystoreController;



// old code(storeblogs)
// await Blogs.findWithDeleted({deleted:true})
// .lean()
// .then(blogs => {
//     const deletedBlogs = blogs.length;
//     return res.render('')
// }
// )
// .catch(()=>{

// })
// await Blogs.find({})
// .then(blogs => 
//     res.render('me/storeBlogs', {blogs: mutipleMongooseToObj(blogs)})
// )
// .catch(next)