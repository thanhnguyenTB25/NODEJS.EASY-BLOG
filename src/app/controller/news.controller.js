
class NewsController {
    // METHOD [GET] /news
    index(req,res,next) {
        res.render('news')
    }
    show(req,res,next) {
        res.send('heldfdsfdsfo');
    }
};

module.exports = new NewsController;