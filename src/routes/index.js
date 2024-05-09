
const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const blogsRouter = require('./blog.js');
const mystoreRouter = require('./mystore.js')
function route(app) {
    app.use('/blogs',blogsRouter);
    app.use('/',siteRouter)
    app.use('/news',newsRouter);
    app.use('/me',mystoreRouter);

    // app.get('/', (req,res) => {
    //     res.render('home');
    // })
    
    // app.get('/news', (req, res) =>{
    //     res.render('news')
    // })
    // app.get('/search', (req, res) =>{
    //     res.render('search')
    // })

}

module.exports = route;