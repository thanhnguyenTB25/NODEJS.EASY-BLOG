const Blogs = require("../model/blogs.js")
const {mutipleMongooseToObj, mongooseToObject} = require("../../until/mongoose.js")
class SiteController {
    // METHOD [GET] /news
    async index(req,res,next) {
        try {
            // const myCourse =  await Course.find({});
            await Blogs.find({})
            .then(myBlogs => 
                //render ra file home.hbs(handle bar) 
                // đưa đối tượng từ object contructor => object literial
                // myBlogs = myBlogs.map(blog => {return blog.toObject()})
                res.render('home', {
                    myBlogs: mutipleMongooseToObj(myBlogs)
                })
            ) 
            .catch(next);
            // res.status(200).json(myCourse)
            // console.log("success")
        } catch (err){
            console.log(err.message);
        }
    };
    async createIndex(req,res,next) {
        try {
            // const myCourse =  await Course.find({});
            await Blogs.create(req.body)
            .then(createrBlogs => 
                //render ra file home.hbs(handle bar) 
                res.status(200).json(createrBlogs)
            ) 
            .catch(next);
            // res.status(200).json(myCourse)
            // console.log("success")
        } catch (err){
            console.log(err.message);
        }
    };
    show(req,res) {
        res.send('controller.site');
    }
};

module.exports = new SiteController;