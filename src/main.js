
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const path = require('path');
console.log(path.join(__dirname, '/views'))

// chạy đến thư mục nơi chưa file image, css 
app.use(express.static(path.join(__dirname,'public')));


//template engine: cấu hình layout thư mục và cấu hình đuôi file(mặc định là handlebars)
app.engine('hbs', handlebars.engine({extname: ".hbs"}));
app.set('view engine', 'hbs');
app.set("views",path.join(__dirname,'/views'));

// http logger
app.use(morgan('combined'));

app.get('/', (req,res) => {
    res.render('home');
})

app.listen(3000,() => console.log("listen port 3000"))