
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const mongoose = require('mongoose');
var methodOverride = require('method-override')
const db = require('./config/database/index')
const sortMiddleWare = require('./app/middleware/sortMiddleware')
db.connect();

// console.log(path.join(__dirname, '/views'))

// chạy đến thư mục nơi chưa file image, css 
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(methodOverride('_method'))
//custom middleware
app.use(sortMiddleWare);
//template engine: cấu hình layout thư mục và cấu hình đuôi file(mặc định là handlebars)
app.engine('hbs', handlebars.engine({extname: ".hbs", helpers: {
    sum: (a,b) => {
        return a+b;
    },
    sortable: (field, sort) => {
        const sorttype = field === sort.column ? sort.type : 'default'
        console.log(sort.column)
        console.log(sort.type)
        const icons = {
            default: 'bi bi-arrow-down-up',
            asc: 'bi bi-sort-down-alt',
            desc: 'bi bi-sort-down'
        }

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
            
        }
        const icon = icons[sorttype]
        const type = types[sorttype]
        return `
            <a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>
        `
    }
}}));
app.set('view engine', 'hbs');
app.set("views",path.join(__dirname,'views'));

// http logger
// app.use(morgan('combined'));


/**
 * note: MÔ hình MVC
 * localhost = hosting
 *  action(truy xuất URL) ---> dispatcher(check matching) ---> function handle (code)
 */

//Routes
route(app)
//port 3000
app.listen(3000,() => console.log("listen port 3000"))